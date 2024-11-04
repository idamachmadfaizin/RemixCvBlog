import type { MetaFunction } from "@remix-run/node";
import { AppNavbar } from "~/components/AppNavbar/AppNavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="container mx-auto min-h-screen max-w-screen-xl px-6 sm:px-10">
      <AppNavbar className="mb-12" />
    </main>
  );
}
