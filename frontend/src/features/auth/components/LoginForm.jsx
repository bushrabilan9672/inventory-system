import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="text-4xl font-bold">
        Welcome Back
      </h2>

      <p className="mt-3 text-slate-500">
        Sign in to continue to Inventra.
      </p>

      <form className="mt-10 space-y-6">

        <div>

          <label className="mb-2 block font-medium">
            Email
          </label>

          <div className="relative">

            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400"/>

            <Input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Password"
              className="pl-12 pr-12 h-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >

              {showPassword
                ? <EyeOff size={18}/>
                : <Eye size={18}/>
              }

            </button>

          </div>

        </div>

        <Button
          className="h-12 w-full rounded-xl"
        >
          Sign In
        </Button>

      </form>

    </div>

  );

}