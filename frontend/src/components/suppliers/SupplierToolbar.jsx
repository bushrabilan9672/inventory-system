import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";

import AddSupplierDialog from "./AddSupplierDialog";

export default function SupplierToolbar({
  search,
  setSearch,
  addSupplier,
}) {

  return (

    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row md:items-center md:justify-between">

      {/* Search */}

      <div className="relative w-full md:w-96">

        <Search
          className="absolute left-3 top-3.5 h-5 w-5 text-slate-400"
        />

        <Input
          type="text"
          placeholder="Search suppliers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11"
        />

      </div>

      {/* Add Supplier */}

      <AddSupplierDialog
        addSupplier={addSupplier}
      />

    </div>

  );

}