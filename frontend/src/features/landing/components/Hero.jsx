import {
  ArrowRight,
  PlayCircle,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            🚀 Modern Inventory ERP for Small Businesses
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Manage Your Entire Business
            <span className="text-blue-600"> From One Platform.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Smart Inventory Management System helps businesses manage products,
            customers, suppliers, sales, inventory, payments and reports
            in real-time through one powerful dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="flex items-center gap-2 border border-gray-300 px-6 py-4 rounded-xl hover:bg-gray-100 transition">

              <PlayCircle size={20} />

              Watch Demo

            </button>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">2K+</h2>
              <p className="text-gray-500">Sales</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">800+</h2>
              <p className="text-gray-500">Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">99%</h2>
              <p className="text-gray-500">Accuracy</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-xl font-bold">
                Dashboard Overview
              </h2>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Live
              </span>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-blue-50 p-6">

                <Package className="text-blue-600 mb-3" />

                <p className="text-gray-500">Products</p>

                <h3 className="text-3xl font-bold mt-2">
                  1,248
                </h3>

              </div>

              <div className="rounded-2xl bg-green-50 p-6">

                <ShoppingCart className="text-green-600 mb-3" />

                <p className="text-gray-500">
                  Sales
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  845
                </h3>

              </div>

              <div className="rounded-2xl bg-yellow-50 p-6">

                <Users className="text-yellow-600 mb-3" />

                <p className="text-gray-500">
                  Customers
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  520
                </h3>

              </div>

              <div className="rounded-2xl bg-purple-50 p-6">

                <BarChart3 className="text-purple-600 mb-3" />

                <p className="text-gray-500">
                  Revenue
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  KSh 2.8M
                </h3>

              </div>

            </div>

            <div className="mt-8 bg-gray-100 rounded-xl p-5">

              <p className="text-gray-500 text-sm mb-2">

                Inventory Performance

              </p>

              <div className="w-full h-3 rounded-full bg-gray-300 overflow-hidden">

                <div className="w-4/5 h-full bg-blue-600 rounded-full"></div>

              </div>

              <p className="mt-2 text-sm text-gray-500">
                Inventory Efficiency: <strong>82%</strong>
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}