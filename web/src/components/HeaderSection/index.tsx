import { FC, PropsWithChildren } from "react";

interface HeaderSectionProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {}

export const HeaderSection: FC<HeaderSectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={`bg-[url('https://www.trajetalacarte.com/img/background.jpg')] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
