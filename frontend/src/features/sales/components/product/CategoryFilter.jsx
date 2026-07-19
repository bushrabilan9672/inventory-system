import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

import { Button } from "../../../../components/ui/button";

const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Furniture",
  "Office",
  "Networking",
];

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Card>
      <CardContent className="p-4">

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (

            <Button
              key={category}
              variant={
                selectedCategory === category
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </Button>

          ))}

        </div>

      </CardContent>
    </Card>
  );
}