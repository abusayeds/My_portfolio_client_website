import { useState, useEffect, useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import HomeScrollRoute from "../home/HomeScrollRoute";
import { FaBlog, FaHome } from "react-icons/fa";
import { scrollRoute } from "../../constants";
import { Link } from "react-scroll";
import { AuthContext } from "../../context/AuthProvider";

const Navber = () => {
  const [scrollColor, setScrollColor] = useState(false);
  const { token } = useContext(AuthContext);
  const location = useLocation();

  const handleScrollColor = () => {
    if (window.scrollY >= 125) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollColor);
    return () => {
      window.removeEventListener("scroll", handleScrollColor);
    };
  }, []);

  const isRootPage = location.pathname === "/";

  return (
    <main
      className={`md:px-4 px-5 border-b shadow-shadowOne border-gray-500 md:h-24 h-16 sticky top-0 z-50 flex justify-between items-center font-titlefon ${
        scrollColor
          ? "bg-black border-none"
          : "bg-bodyColor transition ease-in-out delay-150 duration-500"
      }`}
    >
      <div>
        <p className=" font-serif font-semibold text-designColor uppercase">
          my portfolio
        </p>
      </div>

      {isRootPage && (
        <div
          className={` md:flex hidden transition-all duration-700 ease-in-out ${
            scrollColor
              ? "transform translate-y-0 opacity-100 text-white"
              : "transform -translate-y-full opacity-0"
          }`}
        >
          <HomeScrollRoute />
        </div>
      )}

      <div className="flex md:gap-8 gap-2 ">
        {token && (
          <NavLink
            to="dashboard"
            className=" flex gap-1  items-center hover:text-designColor duration-300"
          >
            <MdDashboard />
            <p className="md:block hidden">Dashboard</p>
          </NavLink>
        )}

        <NavLink
          to="/"
          className=" flex gap-1  items-center hover:text-designColor duration-300"
        >
          <FaHome />
          <p className=" texr-sm md:text-lg">Home</p>
        </NavLink>
        <NavLink
          to="/blog"
          className=" flex gap-1 items-center hover:text-designColor duration-300"
        >
          <FaBlog />
          <p className=" texr-sm md:text-lg">Blog</p>
        </NavLink>
      </div>

      {isRootPage && (
        <div
          className={`bg-black w-screen fixed flex justify-between items-center md:hidden left-0 right-0 bottom-0 z-50 p-4 text-white`}
        >
          {scrollRoute.map((item) => (
            <ul
              className="md:text-base text-xs font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={item._id}
            >
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </ul>
          ))}
        </div>
      )}
    </main>
  );
};

export default Navber;

// {
//     "name": "Fitness",
//     "frontendTechnology": "Java-Scrip, TypeScript , React js , Redux ",
//     "images" : "https://i.ibb.co/vjGkfGf/fitnese.jpg",
//     "backendTechnology": "Mongodb , mongoose and Nosql database system",
//     "designTechnology": "CSS && Shadcn/ui",
//     "projectLiveLink": "https://fitness-client-theta.vercel.app/",
//     "serverLiveLink": "https://fitness-server-one.vercel.app/",
//     "githubClientCodeLink": "https://github.com/abusayeds/Fitness-client",
//     "githubServerCodeLink": "https://github.com/abusayeds/Fitness-server",
//     "description": "Experts define physical fitness as “one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior"
// }

// {
//     "name": "Travel Tips",
//     "frontendTechnology": "Java-Scrip, TypeScript , Next js , TanStack Query",
//     "images" : "https://i.ibb.co/VQQCL1T/travel-tips.png",
//     "backendTechnology": "Mongodb , mongoose and Nosql database system",
//     "designTechnology": "CSS &&  NEXT UI",
//     "projectLiveLink": "https://travel-tips-client-delta.vercel.app/",
//     "serverLiveLink": "https://travel-tips-server-three.vercel.app/",
//     "githubClientCodeLink": "https://github.com/abusayeds/TRAVLE_TIPS_CLIENT",
//     "githubServerCodeLink": "https://github.com/abusayeds/TRAVLE_TIPS_CLIENT",
//     "description": "The Travel Tips Project is a social media-like platform where users can share and discover travel tips. Users can log in, manage their profiles, and perform CRUD operations on posts. This platform also includes an admin dashboard for managing user details and payments."
//     "projectOverViewVideoLink" : "https://www.loom.com/share/1d6c2a67209f4fc6bb74a75c6a7eca4c"
// }
