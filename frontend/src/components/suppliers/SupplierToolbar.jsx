import SearchBar from "../inventory/SearchBar";
import AddSupplierDialog from "./AddSupplierDialog";

export default function SupplierToolbar({
  search,
  setSearch,
  addSupplier,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Supplier */}
      <AddSupplierDialog addSupplier={addSupplier} />
    </div>
  );
}