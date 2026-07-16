import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function SupplierForm({
  register,
  handleSubmit,
  errors,
  onSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Company Name */}
      <div>
        <Label htmlFor="companyName">
          Company Name
        </Label>

        <Input
          id="companyName"
          placeholder="Enter company name"
          {...register("companyName")}
        />

        {errors.companyName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.companyName.message}
          </p>
        )}
      </div>

      {/* Contact Person */}
      <div>
        <Label htmlFor="contactPerson">
          Contact Person
        </Label>

        <Input
          id="contactPerson"
          placeholder="Enter contact person"
          {...register("contactPerson")}
        />

        {errors.contactPerson && (
          <p className="mt-1 text-sm text-red-500">
            {errors.contactPerson.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">
          Phone Number
        </Label>

        <Input
          id="phone"
          placeholder="+254..."
          {...register("phone")}
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">
          Email
        </Label>

        <Input
          type="email"
          id="email"
          placeholder="supplier@email.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <Label htmlFor="address">
          Address
        </Label>

        <Input
          id="address"
          placeholder="Supplier address"
          {...register("address")}
        />

        {errors.address && (
          <p className="mt-1 text-sm text-red-500">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes">
          Notes
        </Label>

        <Textarea
          id="notes"
          placeholder="Additional notes..."
          {...register("notes")}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
      >
        Save Supplier
      </Button>
    </form>
  );
}