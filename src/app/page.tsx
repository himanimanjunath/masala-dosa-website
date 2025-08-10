import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/*Header*/}

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            <div className="flex items-center space-x-2">
              <img src="logo.png" width={90} height={90} alt='logo'></img>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link className="text-gray-700 hover:text-orange-400 font-semibold text-lg" href="#menu">Menu</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-semibold text-lg" href="#about">About</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-semibold text-lg" href="#contact">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Button asChild className="bg-orange-400 hover:bg-orange-500 h-12 w-35 font-semibold text-md">
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
        <div className="relative bg-gradient-to-r from-orange-50 to-green-50 py-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 font-semibold text-md mb-7">
                <Leaf className="w-4 h-4 mr-1" />
                100% Vegetarian</Badge>
              <h1 style={{ fontFamily: 'var(--font-merriweather), serif' }} className="font-merriweather text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Authentic South Indian Cuisine</h1>
              <p className="text-xl text-gray-600 mb-8 text-md">Experience the rich flavors and joy of traditional South Indian dishes, made with love and fresh ingredients.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-400 hover:bg-orange-500 h-12 w-35 font-semibold text-md" asChild>
                  <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                    Order Now
                  </Link>
                </Button>
                <Button size="lg" className="h-12 w-35 font-semibold bg-white text-md" variant="outline" asChild>
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

      {/*Happy Hour Promo*/}
      <section className="py-21 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span style={{ fontFamily: 'var(--font-merriweather), serif' }} className="text-orange-400">HAPPY HOUR </span> <span style={{ fontFamily: 'var(--font-merriweather), serif' }} className="text-white">SPECIAL</span>
            </h2>
            <p className="text-2xl text-gray-300 font-bold">Monday - Friday | 5:30PM - 6:30PM</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="w-150 h-99 bg-gray-800 border-gray-700 p-6">
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'var(--font-merriweather), serif' }} className="font-semibold text-white text-4xl mt-1">Complete Meal Deal</CardTitle>
                  <CardDescription className="text-xl text-gray-300">Perfect introduction to South Indian cuisine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-xl text-gray-200">1 Idli (Steamed rice cake)</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-xl text-gray-200">1 Plain Dosa (Crispy crepe)</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-xl text-gray-200">1 Medu Vada (Lentil donut)</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-xl text-gray-200">1 Cutting Chai (Spiced tea)</span>
                    </div>
                  
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-orange-400">$5.99</div>
                    <Badge className="w-35 h-6" variant="destructive">DINE-IN ONLY</Badge>
                  </div>

                  <p className="text-[10px] text-gray-300 mt-4">*Limited time offer. The offer price is subject to change at any time. Can't be combined with any other offer. Images shown are for representative purpose only.</p>

                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Image
              src="/idli.jpg"
              alt="idli"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"              
              />

              <Image
              src="/dosapromo.jpg"
              alt="dosa"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"              
              />

              <Image
              src="/dosapromo.jpg"
              alt="medu vada"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"              
              />

              <Image
              src="/dosapromo.jpg"
              alt="chai"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"              
              />
            </div>
          </div>
        </div>
      </section>


      {/*Benne Dosa Happy Hour Promo*/}

      <section className="py-21 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif' }} className="text-4xl font-bold mb-4 text-gray-900">
              <span className="text-yellow-600">BENNE DOSA</span> SPECIAL
            </h2>
            <p className="text-2xl text-gray-600 font-bold">Saturday & Sunday | 12:00PM - 3:00PM</p>
          </div>

          <div>
          <div>
            
          </div>

          <div>

          </div>
          </div>
        </div>
      </section>


      {/* About Section */}



      
    </div>
  );
}
