import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-slate-400 text-primary-content p-10">
        <aside>
          <Image src={logo} width={50} height={50} alt="logo" />
          <p className="font-bold">
            <span className="text-xl">Monirul Hassan</span>
            <br />
            Fullstack (MERN) Developer
          </p>
          <div className="flex gap-2 items-center">
            <FaPhone className="text-lg" /> + <FaWhatsapp className="text-xl" />
            <p> +8801711591602 </p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineEmail className="text-xl" />
            <p> hassan.monirul@gmail.com</p>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-6">
            <Link href="https://www.linkedin.com/in/monirul-hassan-80856469/">
              <FaLinkedin className="text-2xl" />
            </Link>

            <Link href="https://github.com/tuheen66">
              <FaGithub className="text-2xl" />
            </Link>

            <Link href="https://www.facebook.com/monirulhassan66">
              <FaFacebook className="text-2xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
