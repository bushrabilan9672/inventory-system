const stats = [
  {
    value: "500+",
    title: "Businesses",
  },
  {
    value: "25K+",
    title: "Products Managed",
  },
  {
    value: "98%",
    title: "Customer Satisfaction",
  },
  {
    value: "24/7",
    title: "Availability",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.title}
            className="text-center"
          >

            <h2 className="text-6xl font-extrabold text-blue-400">
              {item.value}
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}