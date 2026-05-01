import Banner from "@/components/Banner";
import BannerCard from "@/components/BannerCard";
import Products from "@/components/Products";
import { Home } from "lucide-react";
import Image from "next/image";

export default function HomeLayout() {
  return (
    <div >
     
      <main>
             <Banner></Banner>
<BannerCard></BannerCard>
   <Products />
      </main>
    </div>
  );
}
