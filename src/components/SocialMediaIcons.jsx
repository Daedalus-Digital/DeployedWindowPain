import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { FiDribbble } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-80 transition duration-500"
        href="https://www.linkedin.com/in/daedalus-digital-841bb0274/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin className="w-[30px] h-[30px]" />
      </a>
      <a
        className="hover:opacity-80 transition duration-500"
        href="https://github.com/Daedalus-Digital"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithub className="w-[30px] h-[30px]" />
      </a>
      <a
        className="hover:opacity-80 transition duration-500"
        href="https://www.dribbble.com"
        target="_blank"
        rel="noreferrer"
      >
        <FiDribbble className="w-[30px] h-[30px]" />
      </a>
      <a
        className="hover:opacity-80 transition duration-500"
        href="https://www.whatsapp.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp className="w-[30px] h-[30px]" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
