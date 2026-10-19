import ProductCard from "./Product";
import { useState } from "react";
import "./App.css";


const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Digital Camera",
    price: 12999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Classic Sneakers",
    price: 2999,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 2499,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Casual T-Shirt",
    price: 599,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Denim Jacket",
    price: 1999,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Hoodie",
    price: 1299,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Classic Wristwatch",
    price: 2199,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Leather Backpack",
    price: 1799,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Sunglasses",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Leather Wallet",
    price: 699,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Travel Backpack",
    price: 1499,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Ceramic Coffee Mug",
    price: 299,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Desk Lamp",
    price: 999,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 19,
    name: "Decorative Vase",
    price: 799,
    category: "Home",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "Throw Pillow",
    price: 499,
    category: "Home",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 21,
    name: "Yoga Mat",
    price: 899,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 22,
    name: "Basketball",
    price: 799,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 23,
    name: "Football",
    price: 699,
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/81LukCXCiTL.jpg",
  },
  {
    id: 24,
    name: "Water Bottle",
    price: 399,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 25,
    name: "Travel Suitcase",
    price: 3999,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 26,
    name: "Classic Novel",
    price: 399,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 27,
    name: "Notebook Set",
    price: 249,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 28,
    name: "Fountain Pen",
    price: 599,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 29,
    name: "Building Blocks",
    price: 1499,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 30,
    name: "Teddy Bear",
    price: 699,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 31,
    name: "Acoustic Guitar",
    price: 5999,
    category: "Music",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 32,
    name: "Wireless Earbuds",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80",
  },
];


let categories = new Set(["All"]);
for (let i = 0; i < products.length; i++) {
  categories.add(products[i].category);
}
categories = [...categories];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = products.filter(
    (item) => selectedCategory === "All" || selectedCategory === item.category,
  );
  return (
    <main>
      <header>
        <h1>Product Gallery</h1>
        <p>Discover our collection of skincare products.</p>
      </header>

      <section>
        <h2>Our Products</h2>

        {categories.map((item) => (
          <button onClick={() => setSelectedCategory(item)}>{item}</button>
        ))}
        <div className="grid-container">
              {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
        </div>
      
      </section>
    </main>
  );
}

export default App;
