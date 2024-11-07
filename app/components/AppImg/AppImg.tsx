import React from "react";

type Props = {
  srcSm?: string;
  srcMd?: string;
  srcLg?: string;
  srcXl?: string;
  src2Xl?: string;
} & Omit<React.ComponentPropsWithoutRef<"img">, "srcSet">;

export const AppImg: React.FC<Props> = ({
  srcSm,
  srcMd,
  srcLg,
  srcXl,
  src2Xl,
  ...props
}) => {
  const srcSet = [
    srcSm && `${srcSm} 640w`,
    srcMd && `${srcMd} 768w`,
    srcLg && `${srcLg} 1024w`,
    srcXl && `${srcXl} 1280w`,
    src2Xl && `${src2Xl} 1536w`,
  ]
    .filter(Boolean)
    .join(", ");

  if (srcSet.length) delete props.src;

  return <img {...props} srcSet={srcSet || undefined} />;
};
