import { CartProvider } from './CartContext';
import CartPage from './CartPage';
import "./App.css"; 

const App = () => {
  return (
    <CartProvider>
      <div className="title">
        <h1>Shopping Cart</h1>
        <CartPage />
      </div>
    </CartProvider>
  );
};

export default App;
