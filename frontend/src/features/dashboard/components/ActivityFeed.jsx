import {
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

export default function ActivityFeed({ activities = [] }) {

  return (

    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Activity Timeline

        </h2>

        <span className="text-sm text-slate-500">

          Recent Activity

        </span>

      </div>

      {activities.length === 0 ? (

        <div className="rounded-xl bg-slate-50 p-6 text-center">

          <p className="text-slate-500">

            No recent activity.

          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {activities.map((activity) => (

            <div
              key={activity.id}
              className="flex items-start gap-4"
            >

              <div>

                {activity.movement_type === "IN" ? (

                  <ArrowDownCircle
                    className="text-green-600"
                    size={24}
                  />

                ) : (

                  <ArrowUpCircle
                    className="text-red-600"
                    size={24}
                  />

                )}

              </div>

              <div className="flex-1">

                <p className="font-semibold">

                  {activity.product_name}

                </p>

                <p className="text-sm text-slate-600">

                  {activity.movement_type === "IN"
                    ? `Stock In (+${activity.quantity})`
                    : `Stock Out (-${activity.quantity})`}

                </p>

                <p className="mt-1 text-xs text-slate-400">

                  {activity.created_at}

                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}