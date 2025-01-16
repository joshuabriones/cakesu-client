import Cart from "@/features/product/components/Cart";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import AuthForm from "@/features/authentication/components/AuthForm";
import { useUser } from "@/components/context/UserProvider";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  console.log(user);

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/products", name: "Products" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("user");
        window.location.href = "/";
        setIsMenuOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full py-8 px-24 flex justify-between items-center bg-white border-b border-slate-300 text-prim">
      <div className="font-arvo font-bold text-2xl">Cakesu</div>
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li key={link.href} className="mx-4">
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Cart />
        {user ? (
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <img
                src={user.data.image}
                alt="user profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium">{user.data.name}</span>
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate("/profile")} // Navigate to profile page
                >
                  Profile
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* <DialogTrigger asChild> */}
            <Button variant="link" onClick={() => setIsOpen((prev) => !prev)}>
              Sign in
            </Button>
            {/* </DialogTrigger> */}
            <AuthForm
              isSignin={isSignin}
              setIsSignin={setIsSignin}
              setOpen={setIsOpen}
            />
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;
