import Image from "next/image";
import { Inter } from "next/font/google";
import HomeComponent from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeComponent />;
}
