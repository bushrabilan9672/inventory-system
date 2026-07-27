import { useEffect, useState } from "react";

import ReportsStats from "../components/ReportsStats";
import RevenueChart from "../components/RevenueChart";
import LowStockTable from "../components/LowStockTable";
import TopProductsTable from "../components/TopProductsTable";
import ExportButtons from "../components/ExportButtons";

import productApi from "../../inventory/services/productApi";

export default function Reports() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    loadProducts();

  }, []);

  async function loadProducts() {

    try {

      const data = await productApi.getProducts();

      setProducts(data);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">

            Reports & Analytics

          </h1>

          <p className="mt-2 text-slate-500">

            Analyze inventory performance and export reports.

          </p>

        </div>

        <ExportButtons products={products} />

      </div>

      <ReportsStats />

      <RevenueChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <TopProductsTable />

        <LowStockTable />

      </div>

    </div>

  );

}