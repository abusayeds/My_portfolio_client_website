import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { images } from "../../assets/images";
import Title from "../layout/Title";
import { useState } from "react";
import { BsArrowBarDown, BsGithub } from "react-icons/bs";
import { resume } from "../../../config";

const pdf = "http://localhost:5173/resume.pdf";
const Contact = () => {
  const [name, setName] = useState("");
  const [pnumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErr("Username is required");
    } else if (!pnumber) {
      setErr("Phone Number is required");
    } else if (!email) {
      setErr("Email is required");
    } else if (!sub) {
      setErr("Subject is required");
    } else if (!mes) {
      setErr("Message is required");
    } else {
      setSuccess("Your Message sent successfully!");
      setErr("");
      setName("");
      setPNumber("");
      setEmail("");
      setSub("");
      setMes("");
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const DownloadCV = async (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blonURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blonURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <section
      id="contact"
      className="w-full md:py-20 py-10 border-b border-gray-500"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY ABOUT" des="Contact me" />
      </div>
      <div className="w-full ">
        <div className="w-full md:flex justify-between md:gap-5 gap-2">
          <div className="md:w-[35%] md:h-[550px] flex flex-col md:p-10 rounded-lg md:shadow-shadowOne">
            <img
              className="md:h-72 w-full md:object-none rounded"
              src={images.contact}
              alt="Contact"
            />
            <div className="py-5 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-titlefont md:text-base md:tracking-wide text-gray-50">
                  MERN Stack Developer
                </p>
                <p className="text-xs font-titlefont">
                  A MERN Stack Developer is a developer or engineer who can
                  build both the front end and the back end of a website. The
                  front end (the parts of a website a user sees and interacts
                  with) and the back end (the behind-the-scenes data storage and
                  processing) require different skill sets.
                </p>
              </div>

              <div className="md:flex justify-between items-center">
                <div className=" w-1/2 flex justify-between items-center gap-4">
                  <div className="flex gap-8">
                    <a
                      href="https://www.facebook.com/profile.php?id=100074503997052"
                      target="blank"
                    >
                      <span className="IconClass">
                        <FaFacebook />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abu-sayed96/"
                      target="_blank"
                    >
                      <span className="IconClass">
                        <FaLinkedin />
                      </span>
                    </a>
                    <a href="https://github.com/abusayeds" target="_blank">
                      <span className="IconClass">
                        <BsGithub />
                      </span>
                    </a>
                  </div>
                  <a
                    target="_blank"
                    href={resume}
                    className=" text-xs md:text-1xl  md:px-3 p-2 md:py-2  bg-designColor  opacity-75 hover:opacity-100 text-white  rounded flex items-center justify-center font-titlefont gap-2"
                  >
                    RESUME
                    <BsArrowBarDown className=" animate-bounce  duration-500"></BsArrowBarDown>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] h-[550px] relative  flex flex-col pt-10  justify-between bg-[#17191a]">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5 p-5"
            >
              <div className="flex w-full gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <p className="text-gray-400 uppercase tracking-wide md:text-1xl text-xs">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="cotactInput"
                    value={name}
                    type="text"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <p className="text-gray-400 uppercase tracking-wide md:text-1xl text-xs">
                    Phone number
                  </p>
                  <input
                    onChange={(e) => setPNumber(e.target.value)}
                    className="cotactInput"
                    value={pnumber}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 uppercase tracking-wide md:text-1xl text-xs">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="cotactInput"
                  value={email}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 uppercase tracking-wide md:text-1xl text-xs">
                  Subject
                </p>
                <input
                  onChange={(e) => setSub(e.target.value)}
                  className="cotactInput"
                  value={sub}
                  type="text"
                />
              </div>
              <div className="flex flex-col h-36 gap-2">
                <p className="text-gray-400 uppercase tracking-wide md:text-1xl text-xs">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMes(e.target.value)}
                  className="cotactInput h-full "
                  value={mes}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              >
                Submit
              </button>
            </form>
            {err && (
              <p className=" w-full text-center p-2  absolute top-0 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  text-orange-500 text-base tracking-wide animate-bounce">
                {err}
              </p>
            )}
            {success && (
              <p className=" w-full p-3  absolute bottom-0 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                {success}
              </p>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-bodyColor bg-opacity-40 z-50 flex font-titlefont justify-center items-center duration-300">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Download CV</h3>
            <p className="mt-2 font-titlefont ">
              Do you want to Download my Resume.
            </p>
            <div className="flex">
              <div className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-950 opacity-80 hover:opacity-100 text-white rounded flex items-center font-titlefont gap-2">
                <button
                  onClick={() => DownloadCV(pdf) && setIsModalOpen(false)}
                >
                  Download
                </button>
                <BsArrowBarDown className=" animate-bounce duration-500"></BsArrowBarDown>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 ml-8 bg-gradient-to-r from-red-400 to-red-800 opacity-80 hover:opacity-100 text-white rounded "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
