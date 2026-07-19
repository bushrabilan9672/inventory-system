import { Search } from "lucide-react";

import { Input } from "../../../../components/ui/input";

export default function ProductSearch({
  search = "",
  setSearch = () => {},
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 mb-6">
      <div className="relative">

        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <Input
          type="text"
          placeholder="Search by product name, SKU or barcode..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11"
        />

      </div>
    </div>
  );
}