import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/*header first*/}

      <header className="bg-white shadow-sm border-b">
        <div className="flex">
          
            <nav className="hidden md:flex space-x-7">
              <Link className="text-gray-700 hover:text-orange-400 font-medium" href="#menu">Menu</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-medium" href="#about">About</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-medium" href="#contact">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Button asChild className="bg-orange-400 hover:bg-orange-500">
                <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                  Order Online
                </Link>
              </Button>
            </div>
        </div>
      </header>

      
    </div>
  );
}
