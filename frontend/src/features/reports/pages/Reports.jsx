import ReportsStats from "../components/ReportsStats";
import RevenueChart from "../components/RevenueChart";
import LowStockTable from "../components/LowStockTable";
import TopProductsTable from "../components/TopProductsTable";

export default function Reports() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Reports & Analytics
      </h1>

      <ReportsStats />

      <RevenueChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <TopProductsTable />

        <LowStockTable />

      </div>

    </div>
  );
}