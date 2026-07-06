import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
}) {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
}