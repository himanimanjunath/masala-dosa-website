import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const menuCategories = [
  {
    title: "Signature Dosas",
    items: [
      {
        name: "Plain Dosa",
        price: "$8.99",
        description: "A traditional South Indian favorite; a thin, crispy crepe made from a fermented blend of rice and urad dal.",
      },
      { name: "Ghee Dosa", price: "$9.99", description: "Crispy dosa cooked with clarified butter (ghee)." },
      { name: "Onion Dosa", price: "$9.99", description: "Plain dosa with onion filling inside." },
      { name: "Masala Dosa", price: "$9.99", description: "Classic potato & peas masala served separately with a crisp dosa." },
      { name: "Mysore Dosa", price: "$9.99", description: "Traditional Mysore chutney made from red chilies and garlic, spread inside a savory dosa." },
      { name: "Mysore Masala Dosa", price: "$10.99", description: "A delicious fusion of traditional Mysore paste and potato masala in a crispy dosa." },
      { name: "Cheese Dosa", price: "$10.99", description: "A crispy, golden dosa filled with melted cheese." },
      { name: "Plain Paneer Dosa", price: "$10.99", description: "Crispy dosa filled with a mixture of grated paneer." },
      { name: "Onion Capsicum Masala Dosa", price: "$10.99", description: "Crispy dosa with onions, capsicum, and potato masala." },
      { name: "Masala Dosa (Masala Separate)", price: "$9.99", description: "" },
      { name: "Ghee Masala Dosa", price: "$10.99", description: "Masala dosa cooked in ghee." },
      { name: "Onion Masala Dosa", price: "$10.99", description: "Crispy dosa with onions and potato masala." },
    ],
  },
  {
    title: "Special Dosas",
    items: [
      { name: "Nellore Karam Dosa", price: "$9.99", description: "A spicy, crispy dosa smeared with a fiery blend of red chili, garlic, and tangy tomato." },
      { name: "Kadappa Kara Podi Dosa", price: "$9.99", description: "Crisp golden dosa topped with a spicy mix of roasted lentils and red chilies." },
      { name: "Kodaikanal Poondu (Garlic) Dosa", price: "$9.99", description: "Crispy dosa filled with a mixture of shredded garlic." },
      { name: "Madurai Malli (Coriander) Dosa", price: "$9.99", description: "Crispy dosa spread with a flavorful coriander leaves masala." },
      { name: "Davangere Benne Dosa Plain", price: "$9.99", description: "Thick, golden-brown dosa with fluffy interior and a crispy exterior and slathered with rich butter." },
      { name: "Davangere Benne Podi Dosa", price: "$10.99", description: "A thick, golden-brown dosa with a fluffy interior and crispy exterior, filled with spicy lentil podi and lavishly coated in rich butter on the outside." },
      { name: "Davangere Benne Masala Dosa", price: "$11.99", description: "A thick, golden-brown dosa with a fluffy interior and crispy exterior, filled with potato masala and generously slathered with rich butter on the outside." },
      { name: "Andhra Pesarattu (Green Moong) Dosa", price: "$10.99", description: "A nutritious, green-hued dosa made from green moong dal and spices, with a touch of fresh onions inside for added flavor and crunch." },
      { name: "Kanchipuram Vegetable Masala Dosa", price: "$11.99", description: "Flavorful, crispy dosa packed with a mix of vegetables and potato masala." },
      { name: "Mexican Cheese & Corn Dosa", price: "$11.99", description: "Dosa with a rich, melted cheese and sweet corn mixture." },
      { name: "Pizza Dosa", price: "$11.99", description: "A crispy dosa topped with melted cheese, vibrant bell peppers, and sliced onions, finished with a hint of spice." },
      { name: "Punjabi Paneer Dosa", price: "$11.99", description: "A crispy, golden dosa filled with a savory, spiced paneer mixture." },
      { name: "Adirai Ghee Roast 2ft", price: "$11.99", description: "An impressive, crispy 2 feet dosa generously drizzled wth ghee." },
      { name: "Adirai Podi Ghee Roast Dosa 2ft", price: "$11.99", description: "An impressive, crispy 2 feet dosa generously drizzled with podi and ghee." },
    ],
  },
  {
    title: "Idli",
    items: [
      { name: "Idli (2) with Sambar & Chutney", price: "$5.99", description: "Steamed cakes made from fermented batter of rice and lentils." },
      { name: "Ghee Podi Idli (3)", price: "$7.99", description: "Idlis (3) topped with lentil podi and ghee." },
      { name: "Ghee Idli (3)", price: "$6.99", description: "Idlis (3) topped with ghee and sambar." },
      { name: "Curry Leaves Podi Idli", price: "$7.99", description: "Idlis (3) topped with curry leaf powder and ghee." },
      { name: "Nellore Karam Idli (3)", price: "$7.99", description: "Soft idlis (3) topped with spicy karam podi and drizzled with ghee." },
      { name: "Sambar Idli (3)", price: "$6.99", description: "Soft idlis (3) dipped in rich, flavorful sambar." },
      { name: "Idli (2) with Medu Vada (1)", price: "$6.99", description: "Two fluffy idlis served alongside a crispy medu vada." },
      { name: "Extra Idli (1)", price: "$1.99", description: "" },
    ],
  },
  {
    title: "Pongal",
    items: [
      { name: "Pongal 8oz", price: "$5.99", description: "A comforting dish made from rice and lentils, seasoned with black pepper, cumin, ghee, and garnished with cashews and curry leaves. Served with sambar and chutneys." },
      { name: "Pongal (8oz) + Medu Vada (1)", price: "$6.99", description: "Pongal accompanied by a crispy vada. Served with sambar and chutneys." },
      { name: "Pongal (8oz) + Vada (1) + Idli (1)", price: "$7.99", description: "Pongal accompanied by a crispy medu vada and a soft idli. Served with sambar and chutneys." },
    ],
  },
  {
    title: "Live Parotta (From 6PM)",
    items: [
      //chef recommended
      { name: "Bun Parotta (2) with Salna", price: "$9.99", description: "2 flaky bun parotta served with salna (plain vegetarian gravy)." },
      { name: "Coin Parotta (4) with Salna", price: "$9.99", description: "Small, crispy, layered flatbread (4) served with vegetarian gravy." },
      //chef recommended
      { name: "Extra Bun Parotta (1)", price: "$3.99", description: "" },
      { name: "Extra Coin Parotta (1)", price: "$2.99", description: "" },
    ],
  },
  {
    title: "Snacks", //finish this
    items: [
      { name: "Medu Vada (3)", price: "$5.99", description: "Crispy, deep-fried lentil doughnuts made from urad dal with a golden brown exterior and a soft, fluffy interior." },
      { name: "Sambar Vada (3)", price: "$7.99", description: "Crispy medu vadas soaked in sambar." },
      { name: "Curd Vada Salted (3)", price: "$7.99", description: "Crispy medu vadas soaked in creamy, spiced yogurt" },
      { name: "Masala Vada (3)", price: "$5.99", description: "Crispy, savory fritter made from a spiced mixture of chana dal, onions, green chilies" },
      { name: "Onion Samosa (3)", price: "$2.99", description: "Crisp, golden-brown pastry filled with a flavorful mixture of onions" },
      { name: "Curd Vada Sweet (3)", price: "$7.99", description: "Crisp, golden-brown pastry filled with a flavorful mixture of onions" },
      { name: "Extra Medu Vada (1)", price: "$1.99", description: "Crisp, golden-brown pastry filled with a flavorful mixture of onions" },
      { name: "Extra Masala Vada (1)", price: "$1.99", description: "Crisp, golden-brown pastry filled with a flavorful mixture of onions" },
    ],
  },
  {
    title: "Kids Special",
    items: [
      { name: "Kids Ghee Dosa", price: "$7.99", description: "Kid sized crispy dosa drizzled with ghee." },
      { name: "Kids Nutella Dosa", price: "$7.99", description: "Crisp, golden dosa spread with creamy Nutella." },
      //{ name: "Kids Ghee Cone Dosa", price: "$7.99", description: "Crispy ghee dosa shaped into a fun cone form" },
      { name: "Kids Cheese Dosa", price: "$7.99", description: "Kids dosa filled with melted cheese." },
      { name: "Kids Paneer Dosa", price: "$7.99", description: "Kids dosa filled with shredded paneer." },
      { name: "Kids Jaggery Coconut Dosa", price: "$7.99", description: "Kids dosa filled with a delicious blend of jaggery and shredded coconut." },
      { name: "Kids 3pcs Small Uthappam", price: "$7.99", description: "Three mini, fluffy uthappams, each topped with corn, cheese, and paneer." },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Chef Spi Mapillai Drink", price: "$3.99", description: "A refreshing blend of almond milk, soya milk, basil seeds, jaggery, and mixed nuts." },
     // { name: "Kalyana Spi Drink", price: "$3.99", description: "A delightful wedding treat featuring a unique blend of fresh milk, condensed milk, basil seeds, mixed nuts, and agar agar jelly" },
      { name: "Rose Milk", price: "$2.99", description: "A refreshing and fragrant drink made with chilled milk infused with aromatic rose syrup and basil seeds." },
      { name: "Spiced Buttermilk", price: "$2.99", description: "Chilled yogurt drink seasoned with cumin, ginger, chilies, and herbs. Refreshing and soothing." },
      { name: "Mango Lassi", price: "$3.99", description: "A rich and creamy yogurt drink blended with ripe mango pulp." },
      { name: "Filter Coffee", price: "$2.99", description: "A strong and aromatic coffee made from freshly brewed grounds using a traditional South Indian filter served hot with milk and sugar." },
      { name: "Masala Tea", price: "$2.99", description: "A spiced Indian tea made with black tea, cinnamon, cardamom, ginger and cloves and brewed with milk." },
      { name: "Nellai Karupatti Coffee", price: "$3.49", description: "Refreshing coffee made with palm sugar." },
      //{ name: "Cutting Chai", price: "$1.99", description: "" },
    ],
  },
  /* 
  {
    title: "Extras",
    items: [
      { name: "Coconut Chutney 8oz", price: "$3.99", description: "" },
      { name: "Coconut Chutney 16oz", price: "$6.99", description: "" },
      { name: "Tomato Chutney 8oz", price: "$3.99", description: "" },
      { name: "Tomato Chutney 16oz", price: "$6.99", description: "" },
      { name: "Sambar 8oz", price: "$3.99", description: "" },
      { name: "Sambar 16oz", price: "$6.99", description: "" },
      { name: "Roasted Peanut Chutney 8oz", price: "$3.99", description: "" },
      { name: "Roasted Peanut Chutney 16oz", price: "$6.99", description: "" },
      { name: "Potato Masala", price: "$1.99", description: "" },
    ],
  },
  */
  

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
                          {item.name.toLowerCase().includes("bun parotta") && (
                            <Badge variant="secondary" className="text-xs">
                              Chef Recommended
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
