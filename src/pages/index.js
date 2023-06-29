import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <AppHeader />
    </div>
  );
}
