import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 bg-ribcolororange pt-5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-sedgwick font-semibold text-2xl text-bluebody">
            Daedalus Digital Solutions
          </p>
          <p className="font-playfair text-md text-bluebody">
            ©2023 DAEDALUS DESIGNS
          </p>
          <p className="font-playfair text-md text-bluebody">
            All Rights Reserved
          </p>
          <br />
        </div>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
