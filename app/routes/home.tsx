import { LandingPage } from "~/modules/landingModule";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reksa Website" },
    { name: "description", content: "Welcome to My Website!" },
  ];
}

export default function Home() {
  return <LandingPage />;
}
