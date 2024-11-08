import type { MetaFunction } from "@remix-run/node";
import { AppIntroduceSection } from "~/components/About/AppIntroduceSection/AppIntroduceSection";
import { AppSection } from "~/components/About/AppSection/AppSection";
import { AppNavbar } from "~/components/AppNavbar/AppNavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About Idam Achmad Faizin" },
  ];
};

export default function About() {
  return (
    <>
      <AppNavbar className="container mx-auto mb-12" />
      <main className="container mx-auto flex min-h-screen w-full max-w-screen-xl flex-col gap-y-10 px-6 sm:px-10">
        <AppIntroduceSection />
        <AppSection title="About">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            minima rerum aliquam debitis vitae suscipit dolorum, neque ratione
            itaque, sint illum modi ad officiis delectus nesciunt! Consectetur,
            voluptatum? Unde, veritatis?
          </p>
        </AppSection>
      </main>
    </>
  );
}
