import {
    Hero,
    Services,
    SpecialOffer,
    Subscribe,
    Footer,
    PopularProducts,
    SuperQuality,
    CustomerReviews
} from './sections/index'
import Nav from './components/Nav';

const App = () => {
  return (
    <main className="bg-slate-600">
    
        <Nav />

      <section className="px-6">
        <Hero />
      </section>
      <section className="px-6">
        <PopularProducts />
      </section>
      <section className="padding max-thumbs:pt-0">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
