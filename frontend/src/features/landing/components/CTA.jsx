import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-28"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">

        <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold">
          Ready To Get Started?
        </span>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
          Manage Your Entire Business
          <span className="block">
            With Inventra
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Track inventory, process sales, manage customers,
          monitor suppliers, and generate reports using one
          modern business platform.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Button
            asChild
            size="lg"
            className="rounded-xl bg-white px-8 text-blue-700 hover:bg-slate-100"
          >
            <Link to="/login">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-white bg-transparent px-8 text-white hover:bg-white hover:text-blue-700"
          >
            Contact Us
          </Button>

        </div>

      </div>
    </section>
  );
}