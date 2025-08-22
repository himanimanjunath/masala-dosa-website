import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear(); // automatically get current year

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-[87rem] container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif font-bold text-xl">MASALA DOSA</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Authentic South Indian cuisine made with traditional recipes and fresh ingredients. Experience the
              taste of home.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm">1251 E Calaveras Blvd</p>
                  <p className="text-sm text-primary-foreground/80">Milpitas, CA 95035</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <p className="text-sm">(669) 284-9129</p>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-accent" />
                <p className="text-sm">@masaladosa.mp</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monday, Wednesday, Thursday</span>
                <span className="text-right text-primary-foreground/80">9:00 AM - 2:00 PM, 5:30 - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Friday, Saturday, Sunday</span>
                <span className="text-right text-primary-foreground/80">9:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tuesday</span>
                <span className="text-primary-foreground/80">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} MASALA DOSA. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}
