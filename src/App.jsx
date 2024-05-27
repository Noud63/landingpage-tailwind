import React, { useState, useEffect } from "react";
import {
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  Footer,
  PopularProducts,
  SuperQuality,
  CustomerReviews,
} from "./sections/index";
import Nav from "./components/Nav";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 1000 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-slate-600 ">
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

      {showButton ? (
        <div className="fixed bottom-6 right-4">
          <button
            className="w-20 h-20 rounded-full border-2 border-coral-red text-coral-red text-xl"
            onClick={scrollToTop}
          >
            to top
          </button>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
