import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const menuCategories = [
  {
    title: "Signature Dosas",
    items: [
      {
        name: "Plain Dosa",
        price: "$8.99",
        description: "A traditional South Indian favorite; A thin, crispy crepe made from a fermented blend of rice and urad dal",
      },
      { name: "Ghee Dosa", price: "$9.99", description: "Crispy dosa cooked with clarified butter (ghee)" },
      { name: "Onion Dosa", price: "$9.99", description: "Plain dosa with onion filling inside" },
      { name: "Masala Dosa", price: "$9.99", description: "Classic potato & peas masala with onions, encased in a crisp dosa" },
      { name: "Mysore Dosa", price: "$9.99", description: "Traditional Mysore chutney made from red chilies and garlic spread inside a savory dosa" },
      { name: "Mysore Masala Dosa", price: "$10.99", description: "A delicious fusion of traditional Mysore paste and potato masala in a crispy dosa" },
      { name: "Cheese Dosa", price: "$10.99", description: "Crispy dosa filled with melted cheese" },
      { name: "Plain Paneer Dosa", price: "$10.99", description: "Crispy dosa filled with a mixture of crumbled paneer" },
      { name: "Onion Capsicum Masala Dosa", price: "$10.99", description: "Crispy dosa stuffed onions and capsicum potato masala" },
    ],
  },
  {
    title: "Special Dosas",
    items: [
      { name: "Nellore Karam Dosa", price: "$9.99", description: "Dosa with fiery blend of red chili and garlic smeared inside" },
      { name: "Kadappa Kara Podi Dosa", price: "$9.99", description: "Crisp golden dosa topped with a spicy mix of roasted lentils and red chilies" },
      { name: "Kodaikanal Poondu (Garlic) Dosa", price: "$9.99", description: "Crispy dosa filled with a mixture of shredded garlic" },
      { name: "Madurai Malli Dosa", price: "$9.99", description: "Crispy dosa smeared with delicious coriander leaves masala" },
      { name: "Davangere Benne Dosa", price: "$9.99", description: "Thick, golden-brown dosa with fluffy interior and a crispy exterior and slathered with rich butter" },
      { name: "Davangere Benne Podi Dosa", price: "$10.99", description: "" },
      { name: "Davangere Benne Masala Dosa", price: "$11.99", description: "" },
      { name: "Andhra Pesarattu Dosa", price: "$10.99", description: "A nutritious, green-hued dosa made from a blend of green moong dal and spices" },
      { name: "Kanchipuram Vegetable Masala Dosa", price: "$11.99", description: "Flavorful, crispy dosa filled with a mix of vegetables and potato masala" },
      { name: "Amigo Mexican Cheese & Corn Dosa", price: "$11.99", description: "Dosa with a rich, melted cheese and sweet corn filling" },
      { name: "Pizza Dosa", price: "$11.99", description: "Dosa with melted cheese, bell peppers and onions" },
      { name: "Punjabi Paneer Dosa", price: "$11.99", description: "Crispy, golden dosa filled with a savory spiced paneer mixture" },
      { name: "Adhiral Ghee Roast", price: "$11.99", description: "An impressive, crispy 2 feet dosa generously drizzled wth ghee" },
      { name: "Adiral Podi Ghee Roast", price: "$11.99", description: "" },
    ],
  },
  {
    title: "Pongal/Idli Combo",
    items: [
      { name: "Pongal 8oz", price: "$5.99", description: "" },
      { name: "Idli (2) with Medu Vada (1)", price: "$6.99", description: "" },
      { name: "Pongal (8oz) + Medu Vada (1)", price: "$6.99", description: "" },
      { name: "Pongal (8oz) + Vada (1) + Idli (1)", price: "$7.99", description: "" },
    ],
  },
  {
    title: "Live Parotta (From 6PM)",
    items: [
      { name: "Madurai Bun Parotta (2) with Salna", price: "$9.99", description: "" },
      { name: "Ceylon Veechu Parotta (2) with Salna", price: "$9.99", description: "" },
      { name: "Extra Parotta", price: "$3.99", description: "" },
    ],
  },
  {
    title: "Idli",
    items: [
      { name: "Idli (2) with Sambar & Chutney", price: "$5.99", description: "Steamed cakes made from fermented batter of rice and lentils" },
      { name: "Ghee Podi Idli", price: "$7.99", description: "Idlis topped with lentil podi and ghee" },
      { name: "Ghee Idli", price: "$6.99", description: "Idlis topped with ghee and sambar" },
      { name: "Curry Leaves Podi Idly", price: "$7.99", description: "Idlis topped with curry leaf powder and ghee" },
      { name: "Nellore Karam Idli", price: "$7.99", description: "Idlis topped with spicy karam podi and ghee" },
      { name: "Sambar Idly", price: "$6.99", description: "Soft idlis topped in rich, flavorful sambar" },
      { name: "Extra Idli", price: "$1.99", description: "" },
    ],
  },
  {
    title: "Vada",
    items: [
      { name: "Medu Vada (3)", price: "$5.99", description: "text here" },
      { name: "Sambar Vada", price: "$7.99", description: "Crispy medu vadas soaked in sambar" },
      { name: "Curd Vada", price: "$7.99", description: "Crispy medu vadas soaked in creamy, spiced yogurt" },
      { name: "Masala Vada (3)", price: "$5.99", description: "Crispy, savory fritter made from a spiced mixture of chana dal, onions, green chilies" },
      { name: "Onion Samosa (3)", price: "$2.99", description: "Crisp, golden-brown pastry filled with a flavorful mixture of onions" },
    ],
  },
  {
    title: "Kids Special",
    items: [
      { name: "Kids Ghee Dosa", price: "$7.99", description: "Kid sized crispy dosa generously drizzled with ghee" },
      { name: "Kids Nutella Dosa", price: "$7.99", description: "Crisp, golden dosa spread with creamy nutella" },
      { name: "Kids Ghee Cone Dosa", price: "$7.99", description: "Crispy ghee dosa shaped into a fun cone form" },
      { name: "Kids Cheese Dosa", price: "$7.99", description: "Kids dosa filled with melted cheese" },
      { name: "Kids Paneer Dosa", price: "$7.99", description: "Crispy dosa filled with shredded paneer" },
      { name: "Kids Jaggery Coconut Dosa", price: "$7.99", description: "Crispy dosa filled with a delicious blend of jaggery and shredded coconut" },
      { name: "Kids 3pcs Small Uthappam", price: "$7.99", description: "Three mini, fluffy uthappams, each topped with corn, cheese, and paneer" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Chef Spi Mappillai Drink", price: "$3.99", description: "A refreshing blend of almond milk, soya milk, basil seeds, jaggery, and mixed nuts" },
      { name: "Kalyana Spi Drink", price: "$3.99", description: "A delightful wedding treat featuring a unique blend of fresh milk, condensed milk, basil seeds, mixed nuts, and agar agar jelly" },
      { name: "Rose Milk", price: "$2.99", description: "" },
      { name: "Spiced Buttermilk", price: "$2.99", description: "" },
      { name: "Mango Lassi", price: "$3.99", description: "" },
      { name: "Filter Coffee", price: "$2.99", description: "Traditional South Indian coffee" },
      { name: "Masala Tea", price: "$2.99", description: "" },
      { name: "Goli Soda", price: "$3.99", description: "" },
      { name: "Cutting Chai", price: "$1.99", description: "" },
    ],
  },

]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-[87rem] container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl text-foreground mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our authentic South Indian dishes, made fresh daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-muted">
                <CardTitle className="font-serif text-2xl text-primary mt-2">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          {item.name.toLowerCase().includes("vada") && (
                            <Badge variant="secondary" className="text-xs">
                              Vegan
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                      <span className="font-bold text-primary text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
