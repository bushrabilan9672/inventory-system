import {
    Card,
    CardContent,
} from "../../../../components/ui/card";

import {
    ShoppingCart,
    DollarSign,
    Package,
} from "lucide-react";

export default function POSStats({

    totalItems,
    subtotal,
    products,

}) {

    return (

        <div className="grid md:grid-cols-3 gap-5">

            <Card>

                <CardContent className="p-5">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Cart Items
                            </p>

                            <h2 className="text-3xl font-bold">
                                {totalItems}
                            </h2>

                        </div>

                        <ShoppingCart className="text-blue-600 h-10 w-10"/>

                    </div>

                </CardContent>

            </Card>

            <Card>

                <CardContent className="p-5">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Cart Total
                            </p>

                            <h2 className="text-3xl font-bold text-green-600">
                                KSh {subtotal.toLocaleString()}
                            </h2>

                        </div>

                        <DollarSign className="text-green-600 h-10 w-10"/>

                    </div>

                </CardContent>

            </Card>

            <Card>

                <CardContent className="p-5">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Products
                            </p>

                            <h2 className="text-3xl font-bold">
                                {products.length}
                            </h2>

                        </div>

                        <Package className="text-orange-600 h-10 w-10"/>

                    </div>

                </CardContent>

            </Card>

        </div>

    );

}