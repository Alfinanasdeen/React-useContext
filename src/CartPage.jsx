import { useState } from "react";
import "./App.css";

const jsonData = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      image:
        "https://www.gizchina.com/wp-content/uploads/images/2020/01/1789-innckce8022903.jpg",
      price: 549,
      description: "An apple mobile which is nothing like apple",
    },
    {
      id: 2,
      title: "iPhone X",
      image:
        "https://www.cnet.com/a/img/resize/24e53f7fd276fa0fb0225d14aea0b7b2b3443b95/hub/2017/10/31/daa27218-2b11-4b34-8caa-cbc8cba9b55f/iphone-x-17.jpg?auto=webp&fit=cover&height=482&width=856",
      price: 899,
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      image:
        "https://www.pockettactics.com/wp-content/sites/pockettactics/2024/02/samsung-galaxy-s24-ultra-review-menu.jpg",
      price: 1249,
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
    },
    {
      id: 4,
      title: "OPPOF19",
      image:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/09/full/1615263673-4704.jpg?im=FeatureCrop,size=(826,465)",
      price: 280,
      description: "OPPO F19 is officially announced on April 2021.",
    },
    {
      id: 5,
      title: "Huawei P30",
      image: "https://i.insider.com/5c9a1f15d2ce781dd246dab5?width=700",
      price: 499,
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    },
  ],
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    jsonData.products.map((product) => ({ ...product, quantity: 0 }))
  );

  const increaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  const getProductSubtotal = (item) => {
    return item.quantity * item.price;
  };

  const getProductShipping = () => {
    return "Free";
  };

  const getGrandTotal = () => {
    return cartItems.reduce(
      (total, item) => total + getProductSubtotal(item),
      0
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Cart Page</h1>
      <div className="grand-total" style={{ marginTop: "20px" }}>
        <h2>Grand Total</h2>
        <p>Total: ${getGrandTotal()}</p>
      </div>
      <div className="products-container">
        {cartItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image">
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "600px", maxHeight: "600px" }}
              />
            </div>
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Description: {item.description}</p>
              <div className="price-quantity">
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="add-remove">
                <button onClick={() => increaseQuantity(item.id)}>Add</button>
                <button onClick={() => decreaseQuantity(item.id)}>
                  Remove
                </button>
              </div>
              <div className="totals">
                <p>Subtotal: ${getProductSubtotal(item)}</p>
                <p>Shipping: {getProductShipping()}</p>
                <p>Total: ${getProductSubtotal(item)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
