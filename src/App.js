import { About } from './screens/About/About';
import { Contact } from './screens/Contact/Contact';
import { CartProvider } from './screens/Context/GeneralContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestimonialsPage } from './screens/TestimonialsPage/TestimonialsPage';
import { Home } from './screens/Home/Home';



function App() {
  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route exact path="/about" element={(<About />)} />
              <Route exact path="/testimonials" element={(<TestimonialsPage />)} />
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;