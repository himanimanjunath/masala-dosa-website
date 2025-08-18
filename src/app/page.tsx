import { Footer } from "@/components/footer";
import { LocationContact } from "@/components/location-contact";
import { MenuSection } from "@/components/menu-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/*Header*/}

      <header className="bg-gray-50 shadow-sm">
        <div className="max-w-[87rem] pt-3 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img src="logo.png" width={80} height={0} alt='logo'></img>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link className="text-gray-700 hover:text-orange-400 font-semibold text-lg" href="#specials">Specials</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-semibold text-lg" href="#menu">Menu</Link>
              <Link className="text-gray-700 hover:text-orange-400 font-semibold text-lg" href="#contact">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Button asChild className="bg-orange-400 hover:bg-orange-500 h-11 px-8 font-semibold text-md">
                <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                  Order Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/*Hero bg-gradient-to-r from-orange-50 to-green-50*/}
      <section>
        <div className="relative bg-gray-50 py-30">
          <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 font-semibold text-md mb-7">
                <Leaf className="w-4 h-4 mr-1" />
                100% Vegetarian</Badge>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Authentic South Indian Cuisine</h1>
              <p className="text-xl text-gray-600 mb-8 text-md leading-relaxed">Experience the rich flavors and joy of traditional South Indian dishes, made with love and fresh ingredients.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-11 px-8 bg-orange-400 hover:bg-orange-500 font-semibold text-md" asChild>
                  <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                    Order Now
                  </Link>
                </Button>
                <Button size="lg" className="h-11 px-8 font-semibold bg-white text-md" variant="outline" asChild>
                  <Link href="#menu">View Menu</Link>
                </Button>
              </div>
            </div>
            <div className="relative pl-10">
              <img src="dosa.jpeg" width={600} height={500} className="rounded-lg shadow-2xl"></img>
              
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Happy Hour Special */}
      <section id="specials" className="py-21 bg-gray-900 text-white">
        <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[45px] font-bold text-foreground mb-1">
             <span className="text-orange-400">Happy Hour</span> <span className="text-gray-300">Special</span>
            </h2>
            <p className="text-2xl text-gray-300">Monday - Friday | 5:30PM - 6:30PM</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className=" bg-gray-800 border-gray-700 p-6">
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-3xl text-card-foreground font-semibold text-gray-300 mt-1">Complete Meal Deal</CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Perfect introduction to authentic South Indian cuisine
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {[
                    { item: "1 Idli", desc: "Steamed rice cake" },
                    { item: "1 Plain Dosa", desc: "Crispy rice crepe" },
                    { item: "1 Medu Vada", desc: "Lentil donut" },
                    { item: "1 Cutting Chai", desc: "Spiced tea" },
                  ].map((food, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                      <div>
                        <span className="text-lg text-gray-200">{food.item}</span>
                        <span className="text-muted-foreground ml-2">({food.desc})</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="text-4xl font-bold text-orange-400">$5.99</div>
                  <Badge variant="destructive" className="text-sm font-semibold">
                    DINE-IN ONLY
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  *Limited time offer. Prices subject to change. Cannot be combined with other offers. Images for
                  representative purposes only.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/idli.jpg", alt: "Fresh Idli" },
                { src: "/dosapromo.jpg", alt: "Crispy Dosa" },
                { src: "/chai.png", alt: "Medu Vada" },
                { src: "/chai.png", alt: "Cutting Chai" },
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    width={500}
                    height={500}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Benne Dosa Happy Hour Promo*/}

      <section className="py-21 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[45px] font-bold text-gray-900 mb-1">
              <span className="text-yellow-600">Benne Dosa</span> Happy Hour
            </h2>
            <p className="text-2xl text-gray-600">Monday - Friday | 9:00AM - 10:00AM</p>
            
           <div className="mt-17 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-80 lg:h-[495px]">
                <Image
                  src="/benne.png"
                  alt="benne dosa"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Authentic Benne Dosa</h3>
                </div>
              </div>
            </div>


            <Card className="bg-card border-2 border-yellow-600 shadow-xl">
              {/* 
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-3xl text-left text-card-foreground">Benne Dosa Special</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Karnataka's famous buttery dosa made with pure ghee
                </CardDescription>
              </CardHeader>

              */}
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    { item: "1 Benne Dosa", desc: "Crispy dosa with butter & ghee" },
                    { item: "1 Idli", desc: "Steamed rice cake" },
                    { item: "1 Medu Vada", desc: "Lentil donut" },
                    { item: "1 Cutting Chai", desc: "Spiced tea" },
                  ].map((food, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0" />
                      <div>
                        <span className="text-lg text-gray-800 font-semibold text-card-foreground">{food.item}</span>
                        <span className="text-muted-foreground ml-2">({food.desc})</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-bold text-lg text-yellow-600 mb-2 ">What makes it special?</h4>
                  <p className="text-sm text-black leading-relaxed">
                    Our Benne Dosa is prepared in the traditional Karnataka style with pure ghee and
                    butter, creating a golden, crispy exterior with a rich flavor that melts in your mouth.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-4xl font-bold text-yellow-600 text-accent">$8.99</div>
                  <Badge className="bg-accent/10 text-white border-accent/20 bg-yellow-600 text-sm font-semibold">
                    DINE-IN ONLY
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground text-left leading-relaxed">
                  *Limited time offer. Prices subject to change. Cannot be combined with other offers. Images for
                  representative purposes only.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </section>

      <section>
        <MenuSection />
      </section>
      


      {/* About Section */}

      <section>

      </section>

      <section id="contact">
        <LocationContact />
      </section>

      <section>
        <Footer />
      </section>

      
    </div>
  );
}
