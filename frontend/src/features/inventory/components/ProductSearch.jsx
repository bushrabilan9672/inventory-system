import { Search } from "lucide-react";

import { Input } from "../../../components/ui/input";

export default function ProductSearch() {

  return (

    <div className="relative">

      <Search
        className="absolute left-4 top-3.5 text-slate-400"
        size={18}
      />

      <Input
        placeholder="Search products..."
        className="pl-11 h-12 rounded-xl"
      />

    </div>

  );

}