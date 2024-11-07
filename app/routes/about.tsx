import type { MetaFunction } from "@remix-run/node";
import { AppIntroduceSection } from "~/components/About/AppIntroduceSection/AppIntroduceSection";
import { AppNavbar } from "~/components/AppNavbar/AppNavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About Idam Achmad Faizin" },
  ];
};

export default function About() {
  return (
    <main className="container mx-auto min-h-screen max-w-screen-xl px-6 sm:px-10">
      <AppNavbar className="mb-12" />
      <AppIntroduceSection />
    </main>
  );
}
