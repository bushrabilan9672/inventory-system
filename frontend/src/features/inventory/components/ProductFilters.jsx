import { Button } from "../../../components/ui/button";

export default function ProductFilters() {

  return (

    <div className="flex flex-wrap gap-4">

      <Button variant="outline">
        All Categories
      </Button>

      <Button variant="outline">
        All Brands
      </Button>

      <Button variant="outline">
        In Stock
      </Button>

      <Button variant="outline">
        Low Stock
      </Button>

      <Button variant="outline">
        Out Of Stock
      </Button>

    </div>

  );

}