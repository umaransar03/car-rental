import { CartProvider } from './screens/Context/GeneralContext';
import { Landing } from './screens/landing/Landing';

function App() {
  return (
    <div>
      <CartProvider>
          <Landing />
      </CartProvider>
    </div>
  );
}

export default App;
