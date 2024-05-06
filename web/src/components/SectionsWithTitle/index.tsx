import { FC, PropsWithChildren } from "react";

interface SectionsWithTitleProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const SectionWithTitle: FC<SectionsWithTitleProps> = ({
  children,
  className,
  title,
  ...props
}): JSX.Element => {
  return (
    <section className={`container mt-5 ${className}`} {...props}>
      <div className="flex items-center justify-center">
        <h3 className="font-bold text-3xl">{title}</h3>
      </div>
      {children}
    </section>
  );
};
