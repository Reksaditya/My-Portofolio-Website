import { LandingPage } from "~/modules/landingModule";
import type { Route } from "./+types/home";
import { div } from "framer-motion/client";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reksa Website" },
    { name: "description", content: "Welcome to My Website!" },
  ];
}

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Footer />
    </div>
  );
}
