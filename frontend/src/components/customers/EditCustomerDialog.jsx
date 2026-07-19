import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { customerSchema } from "../../schemas/customerSchema";
import CustomerForm from "./CustomerForm";

export default function EditCustomerDialog({
  customer,
  updateCustomer,
}) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      fullName: customer.full_name ?? "",
      phone: customer.phone ?? "",
      email: customer.email ?? "",
      address: customer.address ?? "",
      company: customer.company ?? "",
      customerType: customer.customer_type ?? "Walk-in",
      taxNumber: customer.tax_number ?? "",
      notes: customer.notes ?? "",
    },
  });

  useEffect(() => {
    reset({
      fullName: customer.full_name ?? "",
      phone: customer.phone ?? "",
      email: customer.email ?? "",
      address: customer.address ?? "",
      company: customer.company ?? "",
      customerType: customer.customer_type ?? "Walk-in",
      taxNumber: customer.tax_number ?? "",
      notes: customer.notes ?? "",
    });
  }, [customer, reset]);

  const onSubmit = async (data) => {
    await updateCustomer({
      ...customer,
      ...data,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Customer</DialogTitle>
        </DialogHeader>

        <CustomerForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}