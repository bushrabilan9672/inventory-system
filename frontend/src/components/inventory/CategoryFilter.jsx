import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function CategoryFilter({
  value,
  onValueChange,
}) {
  return (
    <Select
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-52">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">
          All Categories
        </SelectItem>

        <SelectItem value="electronics">
          Electronics
        </SelectItem>

        <SelectItem value="furniture">
          Furniture
        </SelectItem>

        <SelectItem value="office">
          Office Supplies
        </SelectItem>

        <SelectItem value="accessories">
          Accessories
        </SelectItem>
      </SelectContent>
    </Select>
  );
}