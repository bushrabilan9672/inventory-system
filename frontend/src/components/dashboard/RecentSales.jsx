import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function RecentSales({ sales = [] }) {

  return (

    <Card>

      <CardContent className="p-6">

        <h2 className="mb-6 text-xl font-semibold">

          Recent Sales

        </h2>

        {sales.length === 0 ? (

          <p className="text-slate-500">

            No recent sales.

          </p>

        ) : (

          <div className="space-y-5">

            {sales.map((sale) => (

              <div
                key={sale.id}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-3">

                  <Avatar>

                    <AvatarFallback>

                      {(sale.customer_name || "W")
                        .charAt(0)
                        .toUpperCase()}

                    </AvatarFallback>

                  </Avatar>

                  <div>

                    <p className="font-medium">

                      {sale.customer_name || "Walk-in Customer"}

                    </p>

                    <p className="text-sm text-slate-500">

                      {sale.invoice_number}

                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="font-semibold">

                    KSh{" "}
                    {Number(
                      sale.grand_total || 0
                    ).toLocaleString()}

                  </p>

                  <p className="text-xs text-slate-500">

                    {sale.created_at}

                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>

  );

}