import { ShoppingCart, Receipt, CalendarDays } from "lucide-react";

import { format } from "date-fns";

import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

export default function POSHeader() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">

      <CardContent className="flex items-center justify-between py-6">

        <div>

          <div className="flex items-center gap-3">

            <ShoppingCart className="h-8 w-8" />

            <div>

              <h1 className="text-3xl font-bold">
                Smart Inventory POS
              </h1>

              <p className="text-slate-300">
                Production Sales Terminal
              </p>

            </div>

          </div>

        </div>

        <div className="flex gap-8">

          <div className="text-right">

            <div className="flex items-center gap-2 justify-end">

              <Receipt className="h-5 w-5" />

              <span className="text-sm">
                Invoice
              </span>

            </div>

            <p className="font-bold text-xl">
              AUTO
            </p>

          </div>

          <div className="text-right">

            <div className="flex items-center gap-2 justify-end">

              <CalendarDays className="h-5 w-5" />

              <span className="text-sm">
                Date
              </span>

            </div>

            <p className="font-semibold">

              {format(new Date(), "dd MMM yyyy")}

            </p>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}