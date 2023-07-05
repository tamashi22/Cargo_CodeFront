import { Inter } from "next/font/google";
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
