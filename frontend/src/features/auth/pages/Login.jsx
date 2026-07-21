import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-20 text-white">

        <h1 className="text-6xl font-extrabold">
          Inventra
        </h1>

        <p className="mt-8 text-xl leading-9 text-blue-100">

          Smart Inventory &
          Business Management Platform.

        </p>

        <div className="mt-16 space-y-8">

          <div>
            📦 Inventory Management
          </div>

          <div>
            💰 Sales & POS
          </div>

          <div>
            📈 Reports & Analytics
          </div>

          <div>
            👥 Customer Management
          </div>

          <div>
            🚚 Supplier Management
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-slate-50 p-8">

        <LoginForm />

      </div>

    </div>
  );
}