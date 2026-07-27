import { useEffect, useState } from "react";

import stockMovementApi from "../services/stockMovementApi";

import MovementStats from "../components/stock-history/MovementStats";

import MovementSearch from "../components/stock-history/MovementSearch";

import MovementTable from "../components/stock-history/MovementTable";

export default function StockHistory() {

  const [movements, setMovements] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    loadMovements();

  }, []);

  async function loadMovements() {

    try {

      const data = await stockMovementApi.getMovements();

      setMovements(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  const filtered = movements.filter((movement) => {

    const keyword = search.toLowerCase();

    return (

      movement.product?.name
        ?.toLowerCase()
        .includes(keyword) ||

      movement.movement_type
        ?.toLowerCase()
        .includes(keyword)

    );

  });

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Stock Movement History

        </h1>

        <p className="mt-2 text-slate-500">

          View all stock in and stock out activities.

        </p>

      </div>

      <MovementStats movements={movements} />

      <MovementSearch

        search={search}

        setSearch={setSearch}

      />

      {loading ? (

        <div className="rounded-xl bg-white p-10 text-center shadow">

          Loading...

        </div>

      ) : (

        <MovementTable

          movements={filtered}

        />

      )}

    </div>

  );

}