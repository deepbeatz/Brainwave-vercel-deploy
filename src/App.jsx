import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Button from './components/Button';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Services from './components/Services';

export default function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline"></h1> */}
      <div className="pt-{4.75rem} lg:pt-{5.25rem} overflow-hidden">
        {/* <Button className="mt-10" href='#login'>
          Hi
        </Button> */}
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  )
}