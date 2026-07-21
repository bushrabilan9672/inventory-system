import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    business: "Hassan Electronics",
    review:
      "Inventra has completely transformed how we manage our inventory. Everything is faster and more organized.",
  },
  {
    name: "Fatuma Ali",
    business: "Garissa Supermarket",
    review:
      "The sales reports and stock alerts save us hours every week. Highly recommended.",
  },
  {
    name: "Mohamed Noor",
    business: "Noor Wholesale",
    review:
      "Simple to use, beautiful interface, and powerful reporting. Exactly what our business needed.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Loved by Businesses
          </h2>

          <p className="mt-4 text-slate-600">
            Here's what our customers say about Inventra.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-4 flex">

                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.business}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}