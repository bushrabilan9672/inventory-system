export default function MovementStats({ movements }) {

  const total = movements.length;

  const stockIn = movements.filter(

    (m) => m.movement_type === "Stock In"

  ).length;

  const stockOut = movements.filter(

    (m) => m.movement_type === "Stock Out"

  ).length;

  return (

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="text-slate-500">

          Total Movements

        </h3>

        <p className="mt-3 text-4xl font-bold">

          {total}

        </p>

      </div>

      <div className="rounded-2xl bg-green-50 p-6 shadow">

        <h3 className="text-green-700">

          Stock In

        </h3>

        <p className="mt-3 text-4xl font-bold">

          {stockIn}

        </p>

      </div>

      <div className="rounded-2xl bg-red-50 p-6 shadow">

        <h3 className="text-red-700">

          Stock Out

        </h3>

        <p className="mt-3 text-4xl font-bold">

          {stockOut}

        </p>

      </div>

    </div>

  );

}