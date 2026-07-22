import { Button } from "../../../components/ui/button";

export default function WelcomeBanner() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Here's what's happening in your business today.
          </p>

        </div>

        <Button className="bg-white text-blue-700 hover:bg-slate-100">
          Generate Report
        </Button>

      </div>

    </section>
  );
}