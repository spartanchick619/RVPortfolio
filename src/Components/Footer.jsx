import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
                <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">Rosa Valdez</span>
                <p className="text-[18px] my-4">Full Stack Web Developer</p>
            </div>
            <div></div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">Email: rosa.m42@icloud.com</p>
                <p className="text-[16px] my-4">Phone: 619-322-1720 </p>
            </div>
          <div>
            <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
          <div className="flex space-x-4">
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="">
                    <FaGithub/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="">
                    <FaLinkedinIn/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="">
                    <FaTwitter/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="">
                    <FaInstagram/>
                </a>
            </div>
          </div>
        </div>
      </footer>

    );
};

export default Footer;