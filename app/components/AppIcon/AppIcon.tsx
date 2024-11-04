import { AcademicCapIcon } from "@heroicons/react/24/outline";
import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Define a type named HeroIconComponentProps.
 * This type is an alias for the props of the HeroIcons component.
 * It ensures that any component using this type will have the same props as the HeroIcons.
 *
 * @author Idam Achmad Faizin
 */
type HeroIconComponentProps = React.ComponentProps<typeof AcademicCapIcon>;

/**
 * The AppIcon props type.
 *
 * @author Idam Achmad Faizin
 */
type Props = {
  icon: React.ComponentType<HeroIconComponentProps>;
  active?: boolean;
  disabled?: boolean;
} & HeroIconComponentProps;

/**
 * A component for rendering HeroIcons with predefined className.
 *
 * @author Idam Achmad Faizin
 * @param {Props} props - The component's props.
 * @returns {JSX.Element} - The rendered HeroIcons component.
 */
export const AppIcon: React.FC<Props> = ({
  icon: Icon,
  active,
  disabled,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <Icon
      className={twMerge(
        "size-5", // Base styles for the icon
        active && "stroke-primary-500",
        disabled && "stroke-gray-400",
        className, // Additional class names from props
      )}
      {...props} // Pass any other props to the icon component
    />
  );
};
