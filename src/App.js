import { Contact } from './screens/Contact/Contact';
import { CartProvider } from './screens/Context/GeneralContext';
// import { Landing } from './screens/landing/Landing';

function App() {
  return (
    <div>
      <CartProvider>
          {/* <Landing /> */}
          <Contact/>
      </CartProvider>
    </div>
  );
}

export default App;
