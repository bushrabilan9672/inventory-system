import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Inventra?",
    answer:
      "Inventra is a smart inventory and business management platform designed to help businesses manage products, customers, suppliers, sales, and reports in one place.",
  },
  {
    question: "Can Inventra generate reports?",
    answer:
      "Yes. Inventra generates sales reports, inventory reports, customer reports, supplier reports, and business analytics.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. Inventra uses secure authentication and protected database storage to keep business information safe.",
  },
  {
    question: "Who can use Inventra?",
    answer:
      "Inventra is suitable for supermarkets, retail shops, pharmacies, wholesalers, electronics stores, and many other small and medium-sized businesses.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Got Questions?
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about Inventra.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t px-6 py-5 text-slate-600">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}