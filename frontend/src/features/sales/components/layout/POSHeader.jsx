import { ShoppingCart, Receipt, User, CalendarDays } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export default function POSHeader() {
  const today = new Date();

  const date = today.toLocaleDateString("en-KE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = today.toLocaleTimeString("en-KE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white rounded-xl shadow-md border p-6 flex flex-col lg:flex-row justify-between items-center gap-6">

      <div>
        <div className="flex items-center gap-3">

          <div className="bg-blue-100 p-3 rounded-xl">
            <ShoppingCart className="text-blue-600 w-7 h-7" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Point of Sale
            </h1>

            <p className="text-slate-500">
              Smart Inventory Management System
            </p>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center">

        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
          <CalendarDays className="w-4 h-4 text-slate-500" />
          <span className="text-sm">{date}</span>
        </div>

        <div className="bg-slate-100 px-4 py-2 rounded-lg">
          <span className="font-semibold">{time}</span>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
          <User className="w-4 h-4" />
          <span>Cashier</span>
        </div>

        <Button>
          <Receipt className="mr-2 w-4 h-4" />
          New Sale
        </Button>

      </div>

    </div>
  );
}