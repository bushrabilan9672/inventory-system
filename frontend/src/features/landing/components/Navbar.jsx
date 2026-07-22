import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-700"
        >
          Inventra
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">

          <a href="#features" className="font-medium hover:text-blue-600">
            Features
          </a>

          <a href="#why" className="font-medium hover:text-blue-600">
            Why Inventra
          </a>

          <a href="#testimonials" className="font-medium hover:text-blue-600">
            Testimonials
          </a>

          <a href="#faq" className="font-medium hover:text-blue-600">
            FAQ
          </a>

          <a href="#contact" className="font-medium hover:text-blue-600">
            Contact
          </a>

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          <Link to="/login">

            <Button variant="outline">

              Login

            </Button>

          </Link>

          <Button className="rounded-xl px-6">
            Get Started
          </Button>

        </div>

      </div>
    </header>
  );
}