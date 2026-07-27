import MovementRow from "./MovementRow";

export default function MovementTable({ movements }) {

  return (

    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-4 py-3 text-left">ID</th>

            <th className="px-4 py-3 text-left">

              Product

            </th>

            <th className="px-4 py-3 text-left">

              Movement

            </th>

            <th className="px-4 py-3 text-left">

              Quantity

            </th>

            <th className="px-4 py-3 text-left">

              Date

            </th>

          </tr>

        </thead>

        <tbody>

          {movements.map((movement) => (

            <MovementRow
              key={movement.id}
              movement={movement}
            />

          ))}

        </tbody>

      </table>

    </div>

  );

}