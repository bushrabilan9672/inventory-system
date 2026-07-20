import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

import { Label } from "../../../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

import customerApi from "../../services/customerApi";

export default function CustomerSelector({
  customerId,
  setCustomerId,
}) {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      const data = await customerApi.getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card>

      <CardContent className="p-5">

        <h2 className="text-lg font-bold mb-4">
          Customer
        </h2>

        <div className="space-y-2">

          <Label>Select Customer</Label>

          <Select
            value={String(customerId)}
            onValueChange={(value) =>
              setCustomerId(Number(value))
            }
          >

            <SelectTrigger>

              <SelectValue placeholder="Choose customer" />

            </SelectTrigger>

            <SelectContent>

              {customers.map((customer) => (

                <SelectItem
  key={customer.id}
  value={String(customer.id)}
>
  {customer.full_name}
</SelectItem>

              ))}

            </SelectContent>

          </Select>

        </div>

      </CardContent>

    </Card>
  );
}