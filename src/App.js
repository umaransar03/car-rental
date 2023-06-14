// import { Contact } from './screens/Contact/Contact';
import { About } from './screens/About/About';
import { CartProvider } from './screens/Context/GeneralContext';
// import { TestimonialsPage } from './screens/TestimonialsPage/TestimonialsPage';
// import { Landing } from './screens/landing/Landing';

function App() {
  return (
    <div>
      <CartProvider>
          {/* <Landing /> */}
          <About/>
      </CartProvider>
    </div>
  );
}

export default App;
