import {
  Boxes,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-600 p-3">

                <Boxes className="h-7 w-7 text-white" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Inventra
                </h2>

                <p className="text-sm text-slate-400">
                  Smart Inventory Platform
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md leading-7">
              Inventra helps businesses manage inventory,
              suppliers, customers, sales and reports using
              one modern platform.
            </p>

            <div className="mt-8 flex gap-4">

              <FaFacebook className="cursor-pointer text-xl hover:text-blue-500" />

<FaInstagram className="cursor-pointer text-xl hover:text-pink-500" />

<FaLinkedin className="cursor-pointer text-xl hover:text-blue-400" />

<FaGithub className="cursor-pointer text-xl hover:text-white" />
            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-5 font-bold text-white">
              Product
            </h3>

            <ul className="space-y-3">

              <li>Dashboard</li>

              <li>Inventory</li>

              <li>Sales</li>

              <li>Reports</li>

              <li>Customers</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 font-bold text-white">
              Company
            </h3>

            <ul className="space-y-3">

              <li>About</li>

              <li>Features</li>

              <li>FAQ</li>

              <li>Support</li>

              <li>Privacy</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <Mail className="h-5 w-5 text-blue-500" />

                <span>support@inventra.com</span>

              </div>

              <div className="flex gap-3">

                <Phone className="h-5 w-5 text-blue-500" />

                <span>+254 700 000000</span>

              </div>

              <div className="flex gap-3">

                <MapPin className="h-5 w-5 text-blue-500" />

                <span>Garissa, Kenya</span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} Inventra.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}