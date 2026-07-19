import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function CustomerForm({
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
      {/* Full Name */}
      <div>
        <Label htmlFor="fullName">Full Name</Label>

        <Input
          id="fullName"
          placeholder="Enter customer name"
          {...register("fullName")}
        />

        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone</Label>

        <Input
          id="phone"
          placeholder="+254..."
          {...register("phone")}
        />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="customer@email.com"
          {...register("email")}
        />
      </div>

      {/* Company */}
      <div>
        <Label htmlFor="company">Company</Label>

        <Input
          id="company"
          placeholder="Company name"
          {...register("company")}
        />
      </div>

      {/* Customer Type */}
      <div>
        <Label htmlFor="customerType">
          Customer Type
        </Label>

        <select
          {...register("customerType")}
          className="w-full rounded-lg border border-gray-300 p-2"
        >
          <option value="Walk-in">Walk-in</option>
          <option value="Regular">Regular</option>
          <option value="Wholesale">Wholesale</option>
        </select>
      </div>

      {/* Tax Number */}
      <div>
        <Label htmlFor="taxNumber">
          Tax Number
        </Label>

        <Input
          id="taxNumber"
          placeholder="Tax Number"
          {...register("taxNumber")}
        />
      </div>

      {/* Address */}
      <div>
        <Label htmlFor="address">
          Address
        </Label>

        <Textarea
          id="address"
          placeholder="Customer address..."
          {...register("address")}
        />
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
        Save Customer
      </Button>
    </form>
  );
}