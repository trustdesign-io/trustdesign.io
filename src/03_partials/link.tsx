import { Link as RouterLink } from "react-router-dom";
import { Link } from "../";

interface ReactLinkProps {
  appearance?: "body-1" | "body-2" | "body-3";
  icon?: "arrow";
  iconPosition?: "before" | "after";
  to: string;
  title?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}

const ReactLink: React.FC<ReactLinkProps> = ({
  to,
  icon,
  appearance,
  title,
  target,
  rel,
  onClick,
  children,
}) => {
  return (
    <RouterLink to={to}>
      <Link
        appearance={appearance}
        {...(icon && { icon })}
        {...(title && { title })}
        {...(target && { target })}
        {...(onClick && { onClick })}
        {...(rel && { rel })}
      >
        {children}
      </Link>
    </RouterLink>
  );
};

export default ReactLink;
