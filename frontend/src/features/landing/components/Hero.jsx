import { Button } from "../../../components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

            <ShieldCheck className="h-4 w-4" />

            Trusted Inventory Platform

          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-7xl">

            Manage Your

            <span className="block text-blue-600">

              Business Smarter

            </span>

            with Inventra

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Inventra helps businesses manage inventory, suppliers,
            customers, sales, and reports from one modern platform.

            Stay organized. Reduce stock losses. Increase profits.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              size="lg"
              className="gap-2 rounded-xl px-8"
            >
              Get Started

              <ArrowRight className="h-5 w-5" />

            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-xl px-8"
            >
              <PlayCircle className="h-5 w-5" />

              Watch Demo

            </Button>

          </div>

        </div>

        {/* Right */}

        <div className="mt-16 lg:mt-0">

          <div className="rounded-3xl border bg-white p-8 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="font-semibold">

                Inventra Dashboard

              </h3>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

                LIVE

              </span>

            </div>

            <div className="grid gap-4">

              <div className="rounded-xl bg-blue-50 p-5">
                📦 1,250 Products
              </div>

              <div className="rounded-xl bg-emerald-50 p-5">
                💰 KSh 2.5M Sales
              </div>

              <div className="rounded-xl bg-yellow-50 p-5">
                📊 Reports Updated
              </div>

              <div className="rounded-xl bg-red-50 p-5">
                ⚠️ 12 Low Stock Items
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}