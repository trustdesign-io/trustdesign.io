// --------------------------------------------
// ActivityHeatmap
// -> Component
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------
import React from "react";
import clsx from "clsx";
import styles from "./ActivityHeatmap.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

type ActivityItem = {
  ts: string;
  actor: string;
  type: string;
  repo: string;
  url: string;
  count: number;
};

type DayCell = { key: string; count: number };

type ActivityHeatmapProps = {
  weeks?: number;
};

// --------------------------------------------
// Config
// --------------------------------------------

const API_URL =
  "https://trustdesign-activity.danny-a4e.workers.dev/activity?range=365d";

// --------------------------------------------
// Helpers
// --------------------------------------------

function yyyyMmDdUTC(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDaysUTC(d: Date, days: number) {
  const copy = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()),
  );
  copy.setUTCDate(copy.getUTCDate() + days);
  return copy;
}

function startOfWeekUTC(d: Date) {
  const day = d.getUTCDay();
  return addDaysUTC(d, -day);
}

function intensity(count: number) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count === 2) return 2;
  if (count <= 4) return 3;
  return 4;
}

// deterministic pseudo-random
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildMockCounts(days: DayCell[]) {
  const rnd = mulberry32(42);

  const bursts = [
    { center: Math.floor(days.length * 0.2), radius: 7, peak: 4 },
    { center: Math.floor(days.length * 0.5), radius: 10, peak: 3 },
    { center: Math.floor(days.length * 0.8), radius: 6, peak: 4 },
  ];

  const map = new Map<string, number>();

  for (let i = 0; i < days.length; i++) {
    let c = 0;

    const r = rnd();
    if (r > 0.75) c = 1;
    if (r > 0.92) c = 2;

    for (const b of bursts) {
      const dist = Math.abs(i - b.center);
      if (dist <= b.radius) {
        const strength = (b.radius - dist + 1) / (b.radius + 1);
        c += Math.round(strength * b.peak * rnd());
      }
    }

    if (c > 7) c = 7;

    map.set(days[i].key, c);
  }

  return map;
}

function clampInt(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

// --------------------------------------------
// Component
// --------------------------------------------

export default function ActivityHeatmap({ weeks = 26 }: ActivityHeatmapProps) {
  const [items, setItems] = React.useState<ActivityItem[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [fetched, setFetched] = React.useState(false);

  React.useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((d) => setItems(Array.isArray(d.items) ? d.items : []))
      .catch(() => setError("Could not load activity."))
      .finally(() => setFetched(true));
  }, []);

  if (error) return <div>{error}</div>;

  const safeWeeks = clampInt(weeks, 4, 52); // 4–52 weeks
  const rows = 7;
  const daysTotal = safeWeeks * rows;

  const todayUTC = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
    ),
  );

  const gridStart = startOfWeekUTC(addDaysUTC(todayUTC, -(daysTotal - 1)));

  const days: DayCell[] = [];
  const dayKeys = new Set<string>();

  for (let i = 0; i < daysTotal; i++) {
    const date = addDaysUTC(gridStart, i);
    const key = yyyyMmDdUTC(date);
    days.push({ key, count: 0 });
    dayKeys.add(key);
  }

  // Build real counts, but only for keys inside the rendered window
  const realCounts = new Map<string, number>();
  for (const it of items) {
    const day = yyyyMmDdUTC(new Date(it.ts));
    if (!dayKeys.has(day)) continue;
    realCounts.set(day, (realCounts.get(day) || 0) + (it.count || 1));
  }

  // Use mock only after fetch completes AND there is no in-range activity
  const useMock = fetched && realCounts.size === 0;
  const activeCounts = useMock ? buildMockCounts(days) : realCounts;

  return (
    <div className={styles.root}>
      <div
        className={styles.grid}
        role="img"
        aria-label="Contribution heatmap"
        style={
          {
            ["--rows" as any]: rows,
          } as React.CSSProperties
        }
      >
        {days.map((d) => {
          const count = activeCounts.get(d.key) || 0;
          const lvl = intensity(count);

          return (
            <span
              key={d.key}
              title={`${d.key} — ${count} event${count === 1 ? "" : "s"}`}
              className={clsx(styles.cell, styles[`level${lvl}`])}
            />
          );
        })}
      </div>
    </div>
  );
}
