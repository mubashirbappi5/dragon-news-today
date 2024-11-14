import React from "react";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import Navber from "../components/Navber";

const Home = () => {
  return (
    <div className="font-myfont">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <Latestnews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto pt-6">
        <Navber />
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 pt-14">
        <aside className="col-span-3">left</aside>
        <main className="col-span-6">main</main>
        <aside className="col-span-3">right</aside>
      </main>
    </div>
  );
};

export default Home;
