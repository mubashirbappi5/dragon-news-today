import React from "react";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import Navber from "../components/Navber";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { Outlet } from "react-router-dom";

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
      <main className="w-11/12 mx-auto grid grid-cols-12 pt-14 gap-6">
        <aside className="col-span-3">
            <LeftBar/>
        </aside>
        <main className="col-span-6">
            <Outlet/>
        </main>
        <aside className="col-span-3">
            <RightBar/>
        </aside>
      </main>
    </div>
  );
};

export default Home;
