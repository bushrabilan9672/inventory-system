import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";

export default function SalesToolbar({
  search,
  setSearch,
}) {
  return (
    <Card>

      <CardContent className="p-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <h2 className="text-2xl font-bold">
            Sales History
          </h2>

          <div className="relative w-full md:w-96">

            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />

            <Input
              className="pl-10"
              placeholder="Search by invoice..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

      </CardContent>

    </Card>
  );
}