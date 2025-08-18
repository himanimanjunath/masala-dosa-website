import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LocationContact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-[87rem] container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl text-foreground mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600">
            Come experience authentic South Indian flavors in the heart of Milpitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-2">1251 E Calaveras Blvd</p>
                <p className="text-muted-foreground mb-4">Milpitas, CA 95035</p>
                <p className="text-sm text-muted-foreground">(Next to Coconut Hill Milpitas)</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="w-5 h-5" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">Monday, Wednesday, Thursday</span>
                    <span className="text-muted-foreground">9:00 AM - 2:00 PM, 5:30 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Friday, Saturday, Sunday</span>
                    <span className="text-muted-foreground">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Tuesday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-accent font-medium">Happy Hour</span>
                    <span className="text-accent">Mon-Fri 5:30-8:30 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg" id="contact">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Phone className="w-5 h-5" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">(669) 284-9129</p>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Instagram className="w-5 h-5 text-gray-50" />
                  <Link href="https://www.instagram.com/masaladosa.mp/profilecard/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank">
                    <span className="text-gray-50">Follow us on Instagram!</span>
                  </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Link href="https://www.clover.com/online-ordering/masala-dosa-milpitas" target="_blank">
                      Order Online
                    </Link>
                  </Button>
                </div>
  
              </CardContent>
            </Card>
          </div>

         <div className="lg:sticky lg:top-24 w-full h-96 lg:h-full relative rounded-lg overflow-hidden">
          <Image
            src="/rest.jpg"
            alt="restaurant image"
            fill
            className="object-cover object-center"
          />
        </div>
        </div>
      </div>
    </section>
  )
}
