import {  FaHtml5, FaReact } from "react-icons/fa";
import Title from "../layout/Title";
import Cart from "./Cart";
import { BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { SiMongoose, SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const Features = () => {
  return (
    <section
      id="features"
      className=" w-full h-auto md:py-20 py-10 border-b border-gray-500  "
    >
      <Title title="Features" des="What I do"></Title>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Cart
          title="HTML && CSS"
          des=" HTML (HyperText Markup Language) is the most basic building block of the Web. "
          logo={<FaHtml5></FaHtml5>}
        ></Cart>
        <Cart
          title="Java script"
          des="JavaScript is a scripting or programming language that allows you to implement complex features on web pages"
          logo={<IoLogoJavascript></IoLogoJavascript>}
        ></Cart>
        <Cart
          title="Type Script"
          des=" TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript"
          logo={<BiLogoTypescript></BiLogoTypescript>}
        ></Cart>
        <Cart
          title="React JS"
          des="React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc"
          logo={<FaReact></FaReact>}
        ></Cart>
        <Cart
          title="Redux"
          des="Redux is a pattern and library for managing and updating global application state,"
          logo={<BiLogoRedux></BiLogoRedux>}
        ></Cart>
        <Cart
          title=" Advance Next js "
          des="Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites."
          logo={<SiNextdotjs></SiNextdotjs>}
        ></Cart>
        <Cart
          title="MongoDB"
          des="MongoDB is a non-relational document database that provides support for JSON-like storage."
          logo={<DiMongodb></DiMongodb>}
        ></Cart>
        <Cart
          title="Mongoose"
          des="Mongooses are short-legged animals with pointed noses, small ears, and long furry tails."
          logo={<SiMongoose></SiMongoose>}
        ></Cart>
      </div>
    </section>
  );
};

export default Features;
