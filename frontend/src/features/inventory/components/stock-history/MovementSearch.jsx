import { Search } from "lucide-react";

import { Input } from "../../../../components/ui/input";

export default function MovementSearch({

  search,

  setSearch,

}) {

  return (

    <div className="relative">

      <Search

        className="absolute left-4 top-3.5 text-slate-400"

        size={18}

      />

      <Input

        className="pl-11 h-12 rounded-xl"

        placeholder="Search movement..."

        value={search}

        onChange={(e) =>

          setSearch(e.target.value)

        }

      />

    </div>

  );

}