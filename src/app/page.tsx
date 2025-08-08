import { Button } from "@/components/ui/button";
import { Badge, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/*Header*/}

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            <div>
              <img src="logo.png" width={90} height={90} alt='logo' href="null"></img>

            </div>
            <nav className="hidden md:flex space-x-7">
              <Link className="= text-gray-700 hover:text-orange-400 font-medium" href="#menu">Menu</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-medium" href="#about">About</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-medium" href="#contact">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Button asChild className="bg-orange-400 hover:bg-orange-500 h-12 w-30">
                <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                  Order Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/*Hero*/}
      <section>

      </section>
      
    </div>
  );
}
