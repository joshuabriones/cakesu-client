import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-32 py-20 bg-black text-white grid grid-cols-4">
      <div className="">
        <h3 className="font-bold font-arvo">About Cakesu</h3>
        <ul className="flex flex-col gap-2 text-sm mt-4">
          <li>
            <Link to="/" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Store Locations
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold font-arvo">Help & Information</h3>
        <ul className="flex flex-col gap-2 text-sm mt-4">
          <li>
            <Link to="/" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold font-arvo">Payment Options</h3>
        <ul className="flex flex-col gap-2 text-sm mt-4">
          <li>Cash Payment</li>
          <li>Gcash</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold font-arvo">Follow us on</h3>
        <ul className="flex gap-5 text-sm mt-4">
          <li>
            <Link to="/">
              <img src="/icons/fb.svg" alt="Facebook" width="24" height="24" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="/icons/insta.svg"
                alt="Instagram"
                width="24"
                height="24"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="/icons/tiktok.svg"
                alt="Tiktok"
                width="24"
                height="24"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
