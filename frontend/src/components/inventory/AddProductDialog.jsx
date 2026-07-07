import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { productSchema } from "../../schemas/productSchema";


import ProductForm from "./ProductForm";

export default function AddProductDialog() {
    const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(productSchema),
});

const onSubmit = (data) => {
  console.log(data);
};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>

        <ProductForm
  register={register}
  handleSubmit={handleSubmit}
  errors={errors}
  onSubmit={onSubmit}
/>
      </DialogContent>
    </Dialog>
  );
}