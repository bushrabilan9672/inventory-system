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

{/* Supplier */}
<div>
  <Label htmlFor="supplier">
    Supplier
  </Label>

  <Input
    id="supplier"
    placeholder="Supplier name"
    {...register("supplier")}
  />
</div>
      {/* Category */}
<div>
  <Label htmlFor="category">
    Category
  </Label>

  <Input
    id="category"
    placeholder="e.g. Electronics"
    {...register("category")}
  />
</div>
      {/* Barcode */}
<div>
  <Label htmlFor="barcode">
    Barcode
  </Label>

  <Input
    id="barcode"
    placeholder="Barcode"
    {...register("barcode")}
  />
</div>
{/* Purchase Price */}
<div>
  <Label htmlFor="purchasePrice">
    Purchase Price
  </Label>

  <Input
    type="number"
    id="purchasePrice"
    placeholder="0.00"
    {...register("purchasePrice")}
  />

  {errors.purchasePrice && (
    <p className="mt-1 text-sm text-red-500">
      {errors.purchasePrice.message}
    </p>
  )}
</div>
{/* Selling Price */}
<div>
  <Label htmlFor="sellingPrice">
    Selling Price
  </Label>

  <Input
    type="number"
    id="sellingPrice"
    placeholder="0.00"
    {...register("sellingPrice")}
  />

  {errors.sellingPrice && (
    <p className="mt-1 text-sm text-red-500">
      {errors.sellingPrice.message}
    </p>
  )}
</div>

{/* Minimum Stock */}
<div>
  <Label htmlFor="minimumStock">
    Minimum Stock
  </Label>

  <Input
    type="number"
    id="minimumStock"
    placeholder="5"
    {...register("minimumStock")}
  />
</div>
{/* Quantity */}
<div>
  <Label htmlFor="quantity">
    Quantity
  </Label>

  <Input
    type="number"
    id="quantity"
    placeholder="Enter quantity"
    {...register("quantity")}
  />

  {errors.quantity && (
    <p className="mt-1 text-sm text-red-500">
      {errors.quantity.message}
    </p>
  )}
</div>

{/* Product Image */}
<div>
  <Label htmlFor="image">
    Product Image
  </Label>

  <input
    id="image"
    type="file"
    accept="image/*"
    {...register("image")}
    className="w-full rounded-md border border-gray-300 p-2"
  />
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