import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            One Dashboard.
            <span className="block text-blue-600">
              Complete Business Control.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Monitor inventory, sales, suppliers,
            customers and business performance from
            one beautiful dashboard.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-2xl">

          {/* Top Bar */}

          <div className="flex items-center justify-between border-b bg-slate-100 px-8 py-5">

            <div>

              <h3 className="text-xl font-bold">
                Inventra Dashboard
              </h3>

              <p className="text-sm text-slate-500">
                Business Overview
              </p>

            </div>

            <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              ● Live
            </div>

          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-4">

            {/* KPI Cards */}

            <div className="rounded-2xl bg-blue-50 p-6">

              <Package className="mb-4 h-8 w-8 text-blue-600" />

              <h4 className="text-3xl font-bold">
                2,530
              </h4>

              <p className="text-slate-500">
                Products
              </p>

            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">

              <DollarSign className="mb-4 h-8 w-8 text-emerald-600" />

              <h4 className="text-3xl font-bold">
                KSh 4.2M
              </h4>

              <p className="text-slate-500">
                Revenue
              </p>

            </div>

            <div className="rounded-2xl bg-yellow-50 p-6">

              <ShoppingCart className="mb-4 h-8 w-8 text-yellow-600" />

              <h4 className="text-3xl font-bold">
                1,245
              </h4>

              <p className="text-slate-500">
                Sales
              </p>

            </div>

            <div className="rounded-2xl bg-red-50 p-6">

              <TrendingUp className="mb-4 h-8 w-8 text-red-600" />

              <h4 className="text-3xl font-bold">
                +18%
              </h4>

              <p className="text-slate-500">
                Growth
              </p>

            </div>

          </div>

          {/* Bottom */}

          <div className="grid gap-8 border-t p-8 lg:grid-cols-2">

            <div className="rounded-2xl bg-slate-50 p-6">

              <h4 className="mb-6 text-xl font-bold">
                Recent Sales
              </h4>

              <div className="space-y-4">

                {[
                  "Laptop Pro",
                  "HP Printer",
                  "Gaming Mouse",
                  "Office Chair",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <div className="rounded-full bg-blue-100 p-2">

                        <Users className="h-5 w-5 text-blue-600" />

                      </div>

                      <span>{item}</span>

                    </div>

                    <span className="font-semibold text-emerald-600">
                      Paid
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-2xl bg-slate-50 p-6">

              <h4 className="mb-6 text-xl font-bold">
                Inventory Status
              </h4>

              <div className="space-y-5">

                <div>

                  <div className="mb-2 flex justify-between">

                    <span>In Stock</span>

                    <span>85%</span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-200">

                    <div className="h-3 w-[85%] rounded-full bg-emerald-500"></div>

                  </div>

                </div>

                <div>

                  <div className="mb-2 flex justify-between">

                    <span>Low Stock</span>

                    <span>10%</span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-200">

                    <div className="h-3 w-[10%] rounded-full bg-yellow-500"></div>

                  </div>

                </div>

                <div>

                  <div className="mb-2 flex justify-between">

                    <span>Out of Stock</span>

                    <span>5%</span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-200">

                    <div className="h-3 w-[5%] rounded-full bg-red-500"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}