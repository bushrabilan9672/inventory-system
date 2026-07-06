import { Card, CardContent } from "../ui/card";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  subtitle,
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-emerald-600">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`rounded-2xl bg-slate-100 p-4 ${color}`}
        >
          <Icon size={30} />
        </div>
      </CardContent>
    </Card>
  );
}