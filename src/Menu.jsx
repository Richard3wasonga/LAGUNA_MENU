import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // Better QR with logo
import logo from "./assets/logo5-cb.png";
import "./index.css";

export default function Menu() {
  const websiteUrl = "https://www.bimossbeachresort.co.ke/";

  const menuSections = [
    {
      title: "Breakfast",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
      items: [
        {
          name: "Full Breakfast",
          price: 800,
          includes: [
            "Eggs",
            "Bacon",
            "Sausage",
            "Bread",
            "Juice",
            "Fresh Fruit cuts",
            "Tea or Coffee",
          ],
        },
        { name: "Tea Cup", price: 100 },
        { name: "Black Tea", price: 100 },
        { name: "Coffee White", price: 150 },
        { name: "Coffee Black", price: 100 },
        { name: "Chocolate / Milo", price: 150 },
        { name: "Milk", price: 150 },
        { name: "Soup Cup", price: 50 },
        { name: "Fresh Juices", price: 150 },
        { name: "Toast (2 slices)", price: 60 },
        { name: "Fried Eggs / Plain Omelette", price: 120 },
        { name: "Spanish Omelette", price: 150 },
        { name: "Bacon", price: 200 },
        { name: "Sausage / Samosa", price: 80 },
        { name: "Kebab / French Toast", price: 150 },
        { name: "Pancake", price: 100 },
        { name: "Andazi", price: 50 },
        { name: "Sandwich", price: 200 },
        { name: "Nduma / Ngwaci", price: 150 },
        { name: "Bone Soup / Chicken Soup", price: 300 },
      ],
    },
    {
      title: "Light Bites",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      items: [
        { name: "Gizzards / Liver Bites", price: 200 },
        { name: "Chicken Wings", price: 300 },
        { name: "Mshikaki", price: 150 },
        { name: "Maize on Comb / Misakwa", price: 200 },
      ],
    },
    {
      title: "Main Dishes",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      items: [
        { name: "Whole Fish Fry", price: 600, },
        { name: "Whole Fish Mukimo / Chips", price: 700, },
        { name: "Chicken Fry / Ugali", price: 600, },
        { name: "Chicken Fry Chips / Mukimo", price: 650, },
        { name: "Full Chicken", price: 1800 },
        { name: "Full Spring Chicken", price: 1000 },
        { name: "Half Spring Chicken", price: 800 },
        { name: "Beef Fry / Stew", price: 500 },
        { name: "Beef Fry Ugali / Chapati", price: 400 },
        { name: "Beef Fry Chips / Rice", price: 550 },
        { name: "Goat Fry Ugali / Chapati", price: 400 },
        { name: "Goat Fry Chips / Rice / Mukimo", price: 500 },
        { name: "Ugali", price: 100 },
        { name: "Chicken Platter", price: 3000 },
      ],
    },
    {
      title: "Vegetables",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      items: [
        { name: "Mixed Vegetables Laguna", price: 350 },
        { name: "Seasonal Vegetables", price: 150 },
        { name: "Spaghetti Bolognaise", price: 450 },
        { name: "Kachumbari", price: 100 },
      ],
    },
    {
      title: "Other Meals",
      image:
        "https://images.unsplash.com/photo-1543353071-087092ec393a",
      items: [
        { name: "Steamed Rice", price: 200 },
        { name: "Irio (Githeri Minji)", price: 400 },
        { name: "Chips", price: 200 },
        { name: "Chips Masala / Bhajia", price: 250 },
        { name: "Mashed Potatoes / Matoke", price: 200 },
        { name: "Mukimo", price: 200 },
        { name: "Pilau", price: 250 },
        { name: "Chapati", price: 100 },
        { name: "Soda", price: 100 },
        { name: "Mineral Water", price: 70 },
        { name: "Juice Packet", price: 400 },
      ],
    },
    {
      title: "Grills Corner",
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1",
      items: [
        { name: "Choma 1Kg", price: 1200, },
        { name: "½ Choma", price: 600 },
        { name: "Choma Sausage", price: 120 },
        { name: "Samosa", price: 80 },
      ],
    },
  ];

  const splitIntoColumns = (items) => {
    const maxPerColumn = 5;
    let columns = [];
    for (let i = 0; i < items.length; i += maxPerColumn) {
      columns.push(items.slice(i, i + maxPerColumn));
    }
    if (columns.length === 1) {
      const half = Math.ceil(items.length / 2);
      columns = [items.slice(0, half), items.slice(half)];
    }
    return columns;
  };

  return (
    <div className="menu-container">
      <div className="hero">
        <div className="logo-area">
          <img src={logo} alt="Restaurant Logo" />
        </div>
        <h1>LAGUNA RESTAURANT</h1>
        <p>Savor the Flavor • Share the Moments</p>
      </div>

      {menuSections.map((section, index) => {
        const columns = splitIntoColumns(section.items);

        return (
          <section
            key={index}
            className="menu-section"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="overlay">
              <h2>{section.title}</h2>

              <div className="menu-columns">
                {columns.map((column, colIndex) => (
                  <div
                    key={colIndex}
                    className={`menu-column ${
                      colIndex !== columns.length - 1 ? "with-divider" : ""
                    }`}
                  >
                    {column.map((item, i) => (
                      <div key={i} className="menu-item">
                        <div className="item-header">
                          <span>{item.name}</span>
                          <span>Ksh {item.price}</span>
                        </div>
                        {item.includes && (
                          <ul>
                            {item.includes.map((inc, j) => (
                              <li key={j}>{inc}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="qr-section">
        <h3>Scan to View Full Online Menu</h3>
        <div className="qr-wrapper">
          <QRCodeCanvas
            value={websiteUrl}
            size={220}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
            imageSettings={{
              src: logo,
              height: 50,
              width: 50,
              excavate: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}