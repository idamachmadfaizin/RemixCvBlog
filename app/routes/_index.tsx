import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

export const loader = () => redirect("/about");
