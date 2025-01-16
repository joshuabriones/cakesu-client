import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import PropTypes from "prop-types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import { useUser } from "@/components/context/UserProvider";

const AuthForm = ({ isSignin, setIsSignin, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        alert("Login failed!");
        return;
      }

      const data = await response.json();

      if (data) {
        setUser(data);
        localStorage.setItem("user", data.data);
        navigate("/customer");
        setOpen(false); // Close the form
      }
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isSignin ? "Welcome back! 🥮" : "Sign up"}</DialogTitle>
          <DialogDescription>
            {isSignin
              ? "Sign in to browse cakes and manage your orders."
              : "Create an account to continue."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@email.com"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3"
            />
            {isSignin && (
              <button className="self-end text-right text-blue-500 text-xs hover:underline">
                Forgot password?
              </button>
            )}
          </div>

          {!isSignin && (
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="confirm-password" className="text-right">
                Confirm Password
              </Label>
              <Input
                type="password"
                id="confirm-password"
                className="col-span-3"
              />
            </div>
          )}
        </div>
        <Button onClick={handleSubmit}>
          {isSignin ? "Sign in" : "Sign up"}
        </Button>
        <Button onClick={handleGoogleLogin} variant="outline">
          <img
            src="/icons/google.svg"
            alt="google icon"
            width="24"
            height="24"
          />{" "}
          Google
        </Button>
        <div className="text-center">
          {isSignin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignin((prev) => !prev)}
            className="text-blue-600 hover:underline"
          >
            {isSignin ? "Sign up" : "Sign in"}
          </button>
        </div>
      </DialogContent>
    </div>
  );
};
AuthForm.propTypes = {
  isSignin: PropTypes.bool.isRequired,
  setIsSignin: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired, // Add prop validation for setOpen
};

export default AuthForm;
