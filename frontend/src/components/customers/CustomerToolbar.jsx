import { Search } from "lucide-react";

import { Input } from "../ui/input";
import AddCustomerDialog from "./AddCustomerDialog";

export default function CustomerToolbar({
  search,
  setSearch,
  addCustomer,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <Input
          className="pl-10"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <AddCustomerDialog
        addCustomer={addCustomer}
      />
    </div>
  );
}