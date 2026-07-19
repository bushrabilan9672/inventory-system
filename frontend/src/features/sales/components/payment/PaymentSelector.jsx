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

export default function PaymentSelector({
  paymentMethod,
  setPaymentMethod,
}) {

  return (

    <Card>

      <CardContent className="p-5">

        <h2 className="text-lg font-bold mb-4">
          Payment Method
        </h2>

        <div className="space-y-2">

          <Label>Select Payment</Label>

          <Select
            value={paymentMethod}
            onValueChange={setPaymentMethod}
          >

            <SelectTrigger>

              <SelectValue />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="Cash">
                💵 Cash
              </SelectItem>

              <SelectItem value="M-PESA">
                📱 M-PESA
              </SelectItem>

              <SelectItem value="Card">
                💳 Card
              </SelectItem>

            </SelectContent>

          </Select>

        </div>

      </CardContent>

    </Card>

  );

}