import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import React from "react";
import { AppIcon } from "../../AppIcon/AppIcon";
import { AppLinkedinIcon } from "../../AppIcon/Icons/AppLinkedinIcon";
import { AppImg } from "../../AppImg/AppImg";

type Props = React.ComponentPropsWithoutRef<"div">;

export const AppIntroduceSection: React.FC<Props> = (props) => {
  return (
    <header className="flex w-full flex-col gap-y-10">
      <section className="flex flex-col items-center gap-y-7">
        <AppImg
          alt="Rooster walk"
          className="h-20 w-auto animate-moveFlip dark:brightness-[3.5]"
          loading="eager"
          width="80"
          height="80"
          srcSm="/rooster-mascot/rooster-mascot-sm.gif"
          srcMd="/rooster-mascot/rooster-mascot-md.gif"
        />
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-balance text-center text-3xl font-bold">
            Hi, I'am Idam Achmad Faizin
          </h1>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            <div className="flex flex-row items-center justify-center gap-x-2">
              <AppIcon icon={BriefcaseIcon} />
              <p>PT Cebes Indonesia</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <AppIcon icon={MapPinIcon} />
              <p>Indonesia</p>
            </div>
            <Link
              to="https://www.linkedin.com/in/idamahmadfaizin/"
              className="flex flex-row items-center justify-center gap-x-2 transition-all hover:opacity-75"
              target="_blank"
            >
              <AppIcon icon={AppLinkedinIcon} />
              <p>Connect on Linkedin</p>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
