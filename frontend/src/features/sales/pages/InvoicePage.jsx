import { useLocation, useNavigate } from "react-router-dom";

import Invoice from "../components/Invoice";

import { Button } from "../../../components/ui/button";

export default function InvoicePage() {

  const location = useLocation();

  const navigate = useNavigate();

  const sale = location.state?.sale;

  if (!sale) {

    return (

      <div className="flex flex-col items-center justify-center h-screen space-y-4">

        <h2 className="text-2xl font-bold">
          No Invoice Found
        </h2>

        <Button
          onClick={() => navigate("/sales")}
        >
          Back to POS
        </Button>

      </div>

    );

  }

  return <Invoice sale={sale} />;

}