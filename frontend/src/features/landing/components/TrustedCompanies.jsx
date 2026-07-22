export default function TrustedCompanies() {
  const companies = [
    "GARISSA MART",
    "NAIVAS",
    "QUICKMART",
    "CARREFOUR",
    "JAVA",
    "INVENTRA",
  ];

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by Growing Businesses
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-lg font-bold text-slate-700 transition hover:scale-105 hover:bg-blue-600 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}