import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

const sales = [
  {
    customer: "Bushra",
    product: "Laptop Pro",
    amount: "$1,200",
    time: "2 mins ago",
  },
  {
    customer: "Ahmed",
    product: "HP Printer",
    amount: "$450",
    time: "15 mins ago",
  },
  {
    customer: "Fatuma",
    product: "Wireless Mouse",
    amount: "$30",
    time: "1 hour ago",
  },
  {
    customer: "Ali",
    product: "Office Chair",
    amount: "$180",
    time: "3 hours ago",
  },
];

export default function RecentSales() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-xl font-semibold">
          Recent Sales
        </h2>

        <div className="space-y-5">
          {sales.map((sale) => (
            <div
              key={`${sale.customer}-${sale.product}`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {sale.customer.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">
                    {sale.customer}
                  </p>

                  <p className="text-sm text-slate-500">
                    {sale.product}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  {sale.amount}
                </p>

                <p className="text-xs text-slate-500">
                  {sale.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}