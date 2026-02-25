// --------------------------------------------
// Carousel
// -> Component
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Carousel.module.css";

import { useMemo, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Keyboard } from "swiper/modules";

import "swiper/css";

import { Icon } from "../Icon";

// --------------------------------------------
// Types
// --------------------------------------------

export interface CarouselItem {
  id: string;
  title?: string;
  body?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  className?: string;

  slidesPerViewMobile?: number;
  slidesPerViewTablet?: number;
  slidesPerViewDesktop?: number;
  spaceBetween?: number;

  showControls?: boolean;
  loop?: boolean;

  /**
   * Icon names come from your Icon set.
   * If your system uses different names, pass them in from the page.
   */
  prevIcon?: string;
  nextIcon?: string;

  renderSlide?: (item: CarouselItem) => React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Carousel({
  items,
  className,

  slidesPerViewMobile = 1.15,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,
  spaceBetween = 16,

  showControls = true,
  loop = false,

  prevIcon = "arrow-left",
  nextIcon = "arrow-right",

  renderSlide,
}: CarouselProps): React.ReactElement {
  const swiperRef = useRef<SwiperType | null>(null);

  const breakpoints = useMemo(
    () => ({
      0: { slidesPerView: slidesPerViewMobile },
      768: { slidesPerView: slidesPerViewTablet },
      1024: { slidesPerView: slidesPerViewDesktop },
    }),
    [slidesPerViewMobile, slidesPerViewTablet, slidesPerViewDesktop],
  );

  return (
    <section
      data-component="Carousel"
      className={clsx(styles.carousel, className)}
    >
      <div className={styles.carousel__viewport}>
        <Swiper
          data-component="CarouselSwiper"
          modules={[A11y, Keyboard]}
          loop={loop}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          keyboard={{ enabled: true }}
          a11y={{ enabled: true }}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.carousel__slide}>
                {renderSlide ? (
                  renderSlide(item)
                ) : (
                  <article className={styles.carousel__card}>
                    {item.title && (
                      <h3 className={styles.carousel__title}>{item.title}</h3>
                    )}
                    {item.body && (
                      <p className={styles.carousel__body}>{item.body}</p>
                    )}
                  </article>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {showControls && (
        <div
          className={styles.carousel__controls}
          aria-label="Carousel controls"
        >
          <button
            type="button"
            className={styles.carousel__control}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <Icon name={prevIcon} color="var(--color-frost)" />
          </button>

          <button
            type="button"
            className={styles.carousel__control}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <Icon name={nextIcon} color="var(--color-frost)" />
          </button>
        </div>
      )}
    </section>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export { Carousel };
