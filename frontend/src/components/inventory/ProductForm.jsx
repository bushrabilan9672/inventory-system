import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ProductForm({
  register,
  handleSubmit,
  errors,
  onSubmit,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Product Name */}
      <div>
        <Label htmlFor="name">Product Name</Label>

        <Input
          id="name"
          placeholder="Enter product name"
          {...register("name")}
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* SKU */}
      <div>
        <Label htmlFor="sku">SKU</Label>

        <Input
          id="sku"
          placeholder="SKU"
          {...register("sku")}
        />

        {errors.sku && (
          <p className="mt-1 text-sm text-red-500">
            {errors.sku.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <Label htmlFor="description">
          Description
        </Label>

        <Textarea
          id="description"
          placeholder="Product description..."
          {...register("description")}
        />
      </div>

      <Button type="submit" className="w-full">
        Save Product
      </Button>
    </form>
  );
}