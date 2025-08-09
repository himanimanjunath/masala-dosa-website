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
              <img src="logo.png" width={90} height={90} alt='logo'></img>
            </div>
            <nav className="hidden md:flex space-x-7">
              <Link className="text-gray-700 hover:text-orange-400 font-medium" href="#menu">Menu</Link>
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
        <div className="relative bg-gradient-to-r from-orange-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                <Leaf className="w-4 h-4 mr-1" />
                100% Vegetarian</Badge>
              <h1 style={{ fontFamily: 'var(--font-merriweather), serif' }} className="font-merriweather text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Authentic South Indian Cuisine</h1>
              <p className="text-xl text-gray-600 mb-8">Immerse yourself in the rich flavors of traditional South Indian dishes, made with love and fresh ingredients.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-400 hover:bg-orange-500 h-12 w-35" asChild>
                  <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                    Order Now
                  </Link>
                </Button>
                <Button size="lg" className="h-12 w-35" variant="outline" asChild>
                  <Link href="#menu">View Menu</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="dosa.jpeg" width={600} height={500} className="rounded-lg shadow-2xl"></img>
              
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* happy hour promo */}
      
    </div>
  );
}
