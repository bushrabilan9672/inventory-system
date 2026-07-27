export default function MovementRow({ movement }) {

  const badgeClass =
    movement.movement_type === "Stock In"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <tr className="border-b hover:bg-slate-50">

      <td className="px-4 py-3">

        {movement.id}

      </td>

      <td className="px-4 py-3">

        {movement.product?.name || "-"}

      </td>

      <td className="px-4 py-3">

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeClass}`}
        >
          {movement.movement_type}
        </span>

      </td>

      <td className="px-4 py-3 font-semibold">

        {movement.quantity}

      </td>

      <td className="px-4 py-3">

        {movement.created_at}

      </td>

    </tr>
  );
}