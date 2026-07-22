import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

import authApi from "../services/authApi";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await authApi.login({

        email,

        password,

      });

      login(
  response.user,
  response.token
);

navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert(

        error.response?.data?.message ||

        "Login failed."

      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="text-4xl font-bold">
        Welcome Back
      </h2>

      <p className="mt-3 text-slate-500">
        Sign in to continue to Inventra.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        <div>

          <label className="mb-2 block font-medium">
            Email
          </label>

          <div className="relative">

            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400"/>

            <Input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
              className="pl-12 h-12"
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Password
          </label>

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400"/>

            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="pl-12 pr-12 h-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >

              {

                showPassword

                ? <EyeOff size={18}/>

                : <Eye size={18}/>

              }

            </button>

          </div>

        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl"
        >

          {

            loading

            ? "Signing In..."

            : "Sign In"

          }

        </Button>

      </form>

    </div>

  );

}