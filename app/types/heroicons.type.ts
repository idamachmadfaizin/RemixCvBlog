/**
 * This type defines the structure of a HeroIcons component.
 * 
 * @author Idam Achmad Faizin
 */
export type HeroIconsComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;
