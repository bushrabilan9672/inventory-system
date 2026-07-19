import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Dashboard Preview
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Powerful Business Dashboard
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
            Monitor your inventory, sales, customers and business
            performance from one centralized dashboard.
          </p>

        </div>

        <div className="bg-gray-100 rounded-3xl shadow-2xl p-8">

          {/* Top Cards */}

          <div className="grid lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow">

              <Package className="text-blue-600 mb-4" />

              <p className="text-gray-500">
                Products
              </p>

              <h3 className="text-3xl font-bold mt-2">
                1,248
              </h3>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow">

              <ShoppingCart className="text-green-600 mb-4" />

              <p className="text-gray-500">
                Sales
              </p>

              <h3 className="text-3xl font-bold mt-2">
                845
              </h3>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow">

              <Users className="text-yellow-600 mb-4" />

              <p className="text-gray-500">
                Customers
              </p>

              <h3 className="text-3xl font-bold mt-2">
                520
              </h3>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow">

              <DollarSign className="text-purple-600 mb-4" />

              <p className="text-gray-500">
                Revenue
              </p>

              <h3 className="text-3xl font-bold mt-2">
                KSh 2.8M
              </h3>

            </div>

          </div>

          {/* Charts */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Sales */}

            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow">

              <div className="flex justify-between">

                <h3 className="font-bold text-xl">

                  Monthly Sales

                </h3>

                <TrendingUp className="text-green-600" />

              </div>

              <div className="mt-8 space-y-5">

                <div>

                  <div className="flex justify-between mb-2">

                    <span>January</span>

                    <span>80%</span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div className="h-3 bg-blue-600 rounded-full w-4/5"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">

                    <span>February</span>

                    <span>65%</span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div className="h-3 bg-green-500 rounded-full w-2/3"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">

                    <span>March</span>

                    <span>95%</span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div className="h-3 bg-indigo-600 rounded-full w-11/12"></div>

                  </div>

                </div>

              </div>

            </div>

            {/* Low Stock */}

            <div className="bg-white rounded-2xl p-8 shadow">

              <div className="flex items-center gap-3">

                <AlertTriangle className="text-red-500" />

                <h3 className="font-bold">

                  Low Stock

                </h3>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between">

                  <span>Printer Ink</span>

                  <span className="text-red-500 font-bold">
                    2
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>USB Cable</span>

                  <span className="text-orange-500 font-bold">
                    5
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Notebook</span>

                  <span className="text-red-500 font-bold">
                    1
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Mouse</span>

                  <span className="text-orange-500 font-bold">
                    4
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}