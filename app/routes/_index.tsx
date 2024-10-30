import type { MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/Navbar/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Navbar />
    </div>
  );
}
