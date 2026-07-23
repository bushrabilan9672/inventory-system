import { Search, X } from "lucide-react";

import { Input } from "../../../components/ui/input";

export default function ProductSearch({

  search,

  setSearch,

}) {

  return (

    <div className="relative">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <Input

        value={search}

        onChange={(e) => setSearch(e.target.value)}

        placeholder="Search by product, SKU, barcode, category or supplier..."

        className="h-12 rounded-xl pl-11 pr-12"

      />

      {search && (

        <button

          type="button"

          onClick={() => setSearch("")}

          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"

        >

          <X size={18} />

        </button>

      )}

    </div>

  );

}