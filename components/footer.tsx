import Noorulhuda from "../assets/noorulhuda.jpg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-gray-800 text-white p-4 h-96">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex gap-5 items-center mb-4 md:mb-0">
          <Image
            src={Noorulhuda}
            width={300}
            height={300}
            alt="NoorulHuda"
          ></Image>
          <p className="font-semibold">Noorul Huda Trust</p>
        </div>
        <div className="text-center md:text-left">
          <p className="mb-2">
            DoddaThogur, Electronic City, bangalore, Karnataka, India
          </p>
          <p className="mb-2">contact@example.com</p>
          <p>123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
