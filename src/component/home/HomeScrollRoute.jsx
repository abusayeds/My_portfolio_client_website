// import { useState } from "react";

import { Link } from "react-scroll";
import { scrollRoute } from "../../constants";

const HomeScrollRoute = () => {
  //   const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className=" items-center  ">
        <ul className="flex items-center gap-3 md:gap-5 ">
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
        </ul>
      </div>
    </div>
  );
};

export default HomeScrollRoute;
