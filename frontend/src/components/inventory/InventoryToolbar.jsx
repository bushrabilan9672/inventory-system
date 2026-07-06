import { Button } from "../ui/button";
import { Plus } from "lucide-react";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function InventoryToolbar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row md:items-center md:justify-between">

      <div className="flex flex-col gap-4 md:flex-row">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <CategoryFilter
          value={category}
          onValueChange={setCategory}
        />
      </div>

      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add Product
      </Button>

    </div>
  );
}