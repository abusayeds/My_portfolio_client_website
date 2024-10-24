import React from "react";
import Navber from "../component/navber/Navber";

import Footer from "../component/footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <section>
      <main className=" w-auto h-auto bg-bodyColor text-lightText md:px-16 px-0">
        <Navber />
        <Outlet></Outlet>
      </main>
      <Footer />
    </section>
  );
};

export default Main;
