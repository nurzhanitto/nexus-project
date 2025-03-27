import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
const phone = '77774534578';
const message = encodeURIComponent('Hello Nurzhan!!!');
const url = `https://wa.me/${phone}?text=${message}`;
const socialLinks = [
  { href: "https://t.me/mr_1lyasov", icon: <FaTelegram /> },
  { href: url, icon: <FaWhatsapp /> },
  { href: "https://www.instagram.com/mr_1lyasov?igsh=MnBsaXM1N2Uybnpl&utm_source=qr", icon: <FaInstagram /> },
];

const Footer = () => {

  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nurzhan 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
