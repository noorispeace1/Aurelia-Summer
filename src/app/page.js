import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Home } from "lucide-react";
import Image from "next/image";

export default function HomeLayout() {
  return (
    <div >
     
      <main>
             <Banner></Banner>

   <Products />
      </main>
    </div>
  );
}
