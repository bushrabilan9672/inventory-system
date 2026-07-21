import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

import ReceiptHeader from "./ReceiptHeader";
import ReceiptItems from "./ReceiptItems";
import ReceiptFooter from "./ReceiptFooter";

export default function Receipt({

  sale,

  business = {

    name: "Smart Inventory System",

    address: "Garissa, Kenya",

    phone: "+254 700 000 000",

    email: "info@smartinventory.com",

  },

}) {

  if (!sale) return null;

  return (

    <Card className="max-w-3xl mx-auto shadow-xl">

      <CardContent className="p-8">

        <ReceiptHeader

          business={business}

          sale={sale}

        />

        <ReceiptItems

          items={sale.sale_items || []}

        />

        <ReceiptFooter

          sale={sale}

        />

      </CardContent>

    </Card>

  );

}