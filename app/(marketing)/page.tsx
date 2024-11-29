import { Header } from './header';
import Hero from './hero';
import Partners from './partners';
import Products from './products';

import Footer from './footer';
import Services from './services';
import Clients from './clients';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Hero />
      <Partners />
      <Products />
      <Services />
      <Clients />
      <Footer />
    </main>
  );
}
