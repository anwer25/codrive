import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface SectionsWithTitleProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  textPosition?: "left" | "center" | "right";
  titleSize?: "small" | "medium" | "large";
}

export const SectionWithTitle: FC<SectionsWithTitleProps> = ({
  children,
  className,
  title,
  textPosition = "center",
  titleSize = "medium",
  ...props
}): JSX.Element => {
  return (
    <section className={`container mt-5 ${className}`} {...props}>
      <div
        className={clsx({
          "text-left": textPosition === "left",
          "text-center": textPosition === "center",
          "text-right": textPosition === "right",
        })}
      >
        <h3
          className={clsx({
            "text-2xl": titleSize === "small",
            "text-3xl": titleSize === "medium",
            "text-4xl": titleSize === "large",
          })}
        >
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
};
