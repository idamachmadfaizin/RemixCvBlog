import React from "react";

type Props = {
  title: string;
} & React.ComponentPropsWithoutRef<"section">;

export const AppSection: React.FC<Props> = ({ title, children, ...props }) => {
  return (
    <section
      className="flex flex-col gap-y-5 md:flex-row md:gap-y-0"
      {...props}
    >
      <div className="text-xl font-semibold md:w-1/3">
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col gap-y-3 md:w-2/3">
        {children}
      </div>
    </section>
  );
};
