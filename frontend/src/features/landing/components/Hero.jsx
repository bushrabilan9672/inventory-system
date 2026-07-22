import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-300/20 blur-3xl"></div>

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Smart Inventory Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Manage Your
            <span className="text-blue-700"> Business </span>
            Smarter
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Inventra helps businesses manage inventory,
            customers, suppliers, sales, reports and analytics
            from one intelligent platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link to="/login">
              <Button className="h-12 rounded-xl px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button
              variant="outline"
              className="h-12 rounded-xl px-8"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>

          </div>

          <div className="mt-12 flex flex-wrap gap-8">

            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                500+
              </h3>
              <p className="text-slate-500">
                Businesses
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                99%
              </h3>
              <p className="text-slate-500">
                Inventory Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-700">
                24/7
              </h3>
              <p className="text-slate-500">
                Cloud Access
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <div className="rounded-3xl border bg-white p-8 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  Dashboard
                </h2>

                <p className="text-slate-500">
                  Business Overview
                </p>

              </div>

              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Online
              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-sm text-slate-500">
                  Revenue
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  KSh 793K
                </h3>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-sm text-slate-500">
                  Sales
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  248
                </h3>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-5">
                <p className="text-sm text-slate-500">
                  Products
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  1,250
                </h3>
              </div>

              <div className="rounded-2xl bg-red-50 p-5">
                <p className="text-sm text-slate-500">
                  Low Stock
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  12
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}