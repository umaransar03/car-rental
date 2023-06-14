import { About } from './screens/About/About';
import { Contact } from './screens/Contact/Contact';
import { CartProvider } from './screens/Context/GeneralContext';
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
import { Landing } from './screens/landing/Landing';
import { Testimonials } from './screens/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route exact path="/" element={(<Landing />)} />
            <Route exact path="/about" element={(<About />)} />
            <Route exact path="/testimonials" element={(<Testimonials />)} />
            <Route exact path="/contact" element={(<Contact />)} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;