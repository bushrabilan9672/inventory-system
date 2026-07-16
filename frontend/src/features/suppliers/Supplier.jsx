import { useEffect, useState } from "react";

import api from "../../services/api";

import SupplierToolbar from "../../components/suppliers/SupplierToolbar";
import SupplierTable from "../../components/suppliers/SupplierTable";

export default function Supplier() {
  const [search, setSearch] = useState("");
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // ==========================
  // Fetch Suppliers
  // ==========================
  const fetchSuppliers = async () => {
    try {
      const response = await api.get("/suppliers");
      setSuppliers(response.data);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };

  // ==========================
  // Add Supplier
  // ==========================
  const addSupplier = async (newSupplier) => {
    try {
      await api.post("/suppliers", {
        company_name: newSupplier.companyName,
        contact_person: newSupplier.contactPerson,
        phone: newSupplier.phone,
        email: newSupplier.email,
        address: newSupplier.address,
        notes: newSupplier.notes,
      });

      fetchSuppliers();
    } catch (error) {
      console.error("Error adding supplier:", error);
      alert("Failed to add supplier.");
    }
  };

  // ==========================
  // Update Supplier
  // ==========================
  const updateSupplier = async (supplier) => {
    try {
      await api.put(`/suppliers/${supplier.id}`, {
        company_name: supplier.companyName,
        contact_person: supplier.contactPerson,
        phone: supplier.phone,
        email: supplier.email,
        address: supplier.address,
        notes: supplier.notes,
      });

      fetchSuppliers();
    } catch (error) {
      console.error("Error updating supplier:", error);
      alert("Failed to update supplier.");
    }
  };

  // ==========================
  // Delete Supplier
  // ==========================
  const deleteSupplier = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this supplier?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/suppliers/${id}`);
      fetchSuppliers();
    } catch (error) {
      console.error("Error deleting supplier:", error);
      alert("Failed to delete supplier.");
    }
  };

  // ==========================
  // Search Filter
  // ==========================
  const filteredSuppliers = suppliers.filter((supplier) => {
    const company =
      supplier.company_name?.toLowerCase() || "";

    const contact =
      supplier.contact_person?.toLowerCase() || "";

    return (
      company.includes(search.toLowerCase()) ||
      contact.includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Supplier Management
        </h1>

        <p className="text-slate-500">
          Manage all suppliers from one place.
        </p>
      </div>

      <SupplierToolbar
        search={search}
        setSearch={setSearch}
        addSupplier={addSupplier}
      />

      <SupplierTable
        suppliers={filteredSuppliers}
        updateSupplier={updateSupplier}
        deleteSupplier={deleteSupplier}
      />
    </div>
  );
}