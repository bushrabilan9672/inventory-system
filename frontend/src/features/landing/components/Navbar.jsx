import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  Boxes,
  Menu,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="rounded-2xl bg-blue-600 p-3 shadow-lg">

            <Boxes className="h-7 w-7 text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Inventra
            </h1>

            <p className="-mt-1 text-xs text-slate-500">
              Smart Inventory Platform
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 font-medium text-slate-600 lg:flex">

          <a
            href="#features"
            className="transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#dashboard"
            className="transition hover:text-blue-600"
          >
            Dashboard
          </a>

          <a
            href="#faq"
            className="transition hover:text-blue-600"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-600"
          >
            Contact
          </a>

        </nav>

        {/* Right Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <Button
            variant="ghost"
            asChild
          >
            <Link to="/login">
              Login
            </Link>
          </Button>

          <Button
            asChild
            className="rounded-xl px-7"
          >
            <Link to="/login">
              Get Started
            </Link>
          </Button>

        </div>

        {/* Mobile */}

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >

          <Menu className="h-6 w-6" />

        </Button>

      </div>

    </header>
  );
}