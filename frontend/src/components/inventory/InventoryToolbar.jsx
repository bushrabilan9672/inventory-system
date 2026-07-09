import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import AddProductDialog from "./AddProductDialog";

export default function InventoryToolbar({
  search,
  setSearch,
  category,
  setCategory,
  addProduct,
  updateProduct,
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

      
        
        <AddProductDialog addProduct={addProduct} />
      

    </div>
  );
}