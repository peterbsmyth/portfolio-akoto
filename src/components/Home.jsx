import React from "react"
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Full Stack Software Engineering
          </h2>
          <p className="text-gray-400 py-70 max-w-md">
          Highly skilled Full Stack Software Engineer with a strong background in Information Technology, IoT, and networking. Proficient in Python, JavaScript, HTML, CSS, React.js, and experienced in enhancing system performance and data accuracy. Adapt in IoT systems, software engineering principles, database management, and system analysis. Committed to leveraging networking expertise and software development skills to drive innovation in a dynamic tech environment.
      </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-100 h-300 md:w-250 md:h-700"
          />
        </div>
      </div>
    </div>
  )
}

export default Home