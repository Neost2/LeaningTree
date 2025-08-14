// App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Activities from './components/Activities';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingButton from './components/BookingButton';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Activities />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingButton />
    </div>
  );
}

export default App;