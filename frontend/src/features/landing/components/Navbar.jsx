import { Menu, X, Boxes } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
            <Boxes size={24} />
          </div>

          <div>
            <h1 className="font-bold text-lg text-gray-900">
              Smart Inventory
            </h1>

            <p className="text-xs text-gray-500">
              Inventory Management ERP
            </p>
          </div>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>

          <a href="#modules" className="text-gray-600 hover:text-blue-600">
            Modules
          </a>

          <a href="#statistics" className="text-gray-600 hover:text-blue-600">
            Statistics
          </a>

          <a href="#faq" className="text-gray-600 hover:text-blue-600">
            FAQ
          </a>

          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>

        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Get Started
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-5">

            <a href="#features">Features</a>
            <a href="#modules">Modules</a>
            <a href="#statistics">Statistics</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>

            <button className="mt-4 py-3 rounded-lg border border-blue-600 text-blue-600">
              Login
            </button>

            <button className="py-3 rounded-lg bg-blue-600 text-white">
              Get Started
            </button>

          </div>

        </div>
      )}
    </header>
  );
}