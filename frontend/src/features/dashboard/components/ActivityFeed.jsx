const activities = [
  {
    action: "John purchased HP EliteBook",
    time: "2 min ago",
  },
  {
    action: "Inventory updated",
    time: "10 min ago",
  },
  {
    action: "Supplier added",
    time: "30 min ago",
  },
  {
    action: "Monthly report generated",
    time: "1 hour ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Activity Timeline
      </h2>

      <div className="mt-6 space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600"></div>

            <div>

              <p className="font-medium">
                {activity.action}
              </p>

              <span className="text-sm text-slate-500">
                {activity.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}