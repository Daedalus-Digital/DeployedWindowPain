import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, transform } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-orange-400 before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/ddesignlogo.PNG"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] "
            src="assets/ddesignlogo.PNG"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-sedgwick z-10 text-center md:text-start tracking-wide">
            <span className="text-ribcolororange font-sedgwick">D</span>aedalus{" "}
            <span className="text-ribcolororange font-sedgwick">D</span>igital
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Creating your digital vision.{" "}
            <span className="text-ribcolororange">Pixel by pixel.</span>
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas
            quod earum dolore rem repellat dolorum. Iure distinctio illum
            numquam eligendi sapiente architecto vitae deleniti voluptatum
            accusamus!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex gap-2">
            <AnchorLink
              className="bg-gradient-orange text-ribcolororange rounded-sm py-3 px-7 font-playfair
            border-2 hover:bg-bluebody hover:text-white hover:border-ribcolororange transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Us
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm bg-gradient-orange py-0.5 pr-0.5 border-2 border-ribcolororange hover:border-white transition duration-500 hover:bg-bluebody"
              onClick={() => setSelectedPage("projects")}
              href="#projects"
            >
              <div className="bg-deep-blue hover:text-ribcolororange transition rounded-sm  w-full h-full flex items-center justify-center px-10 font-playfair">
                See Our Work
              </div>
            </AnchorLink>
          </div>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
