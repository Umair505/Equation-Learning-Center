import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#111f46] text-white py-8">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
  <div className="relative group">
    <a
      href="https://www.youtube.com/@EquationLearningCenter2025"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-500 hover:scale-110 transition-transform duration-300"
    >
      <FaYoutube />
    </a>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
      YouTube
    </div>
  </div>

  <div className="relative group">
    <a
      href="https://www.facebook.com/EquationLearningCenter"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:scale-110 transition-transform duration-300"
    >
      <FaFacebook />
    </a>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
      Facebook
    </div>
  </div>

  <div className="relative group">
    <a
      href="https://wa.me/8801818567145"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp />
    </a>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
      WhatsApp
    </div>
  </div>
</div>


          {/* Contact Info */}
          <div className="text-center md:text-right space-y-2 text-sm">
            <p className="flex items-center justify-center md:justify-end gap-2">
              <FiPhone className="text-teal-400" /> 01818-567145
            </p>
            <p className="flex items-center justify-center md:justify-end gap-2">
              <HiOutlineMail className="text-yellow-400" /> equationlearningcenter@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-6">
        <p>© 2025 Equation Learning Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
