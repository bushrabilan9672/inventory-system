import { Package } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
        <Package className="h-6 w-6" />
      </div>

      <div>
        <h1 className="text-lg font-bold text-slate-900">
          Smart Inventory
        </h1>

        <p className="text-xs text-slate-500">
          Inventory Management
        </p>
      </div>
    </div>
  );
}