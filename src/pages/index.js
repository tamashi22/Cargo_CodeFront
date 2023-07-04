import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/AppHeader";
import { AppLayout } from "@/components/AppLayout";
import { HomeLayout } from "@/pageLayout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppLayout>
      <div className="container">
        <HomeLayout />
      </div>
    </AppLayout>
  );
}
