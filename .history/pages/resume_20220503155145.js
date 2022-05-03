import Bar from "@/components/Bar";
import { languages, tools } from "../data";
import { fadeInUp, routeFade } from "@/utils/animations";
import { motion } from "framer-motion";
import { GiTie } from "react-icons/gi";

export default function resume() {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <div>
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Master in Software Product Engineering
              </h5>
              <p className="font-semibold">
                Jönköping School of Engineering (Present)
              </p>
              <p className="my-3">In progress</p>
              <h5 className="my-2 text-xl font-bold">
                Bachelor in Computer Science (2012 – 2016)
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front End Developer </h5>
            <p className="font-semibold">
              at x Technos (April 2017 - July 2018)
            </p>
            <li className="my-3">
              Frontend architechture using Redux , React , Redux in the
              Node-powered workflow
            </li>
            <li>
              Cooperate with the architect and backend devs of the application
            </li>
            <a
              href="/assets/xTechnos.pdf"
              download="xTechnos.pdf"
              className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200"
            >
              <GiTie className="w-6 h-6" />
              <span>Experience Letter</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Database & Stacks</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
