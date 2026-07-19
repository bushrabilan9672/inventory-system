import { useEffect, useState } from "react";

import api from "../../services/api";

import CustomerToolbar from "../../components/customers/CustomerToolbar";
import CustomerTable from "../../components/customers/CustomerTable";

export default function Customer() {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Fetch Customers
  const fetchCustomers = async () => {
    try {
      const response = await api.get("/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Add Customer
  const addCustomer = async (newCustomer) => {
    try {
      await api.post("/customers", {
        full_name: newCustomer.fullName,
        phone: newCustomer.phone,
        email: newCustomer.email,
        address: newCustomer.address,
        company: newCustomer.company,
        customer_type: newCustomer.customerType,
        tax_number: newCustomer.taxNumber,
        notes: newCustomer.notes,
      });

      fetchCustomers();
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  // Update Customer
  const updateCustomer = async (updatedCustomer) => {
    try {
      await api.put(`/customers/${updatedCustomer.id}`, {
        full_name: updatedCustomer.fullName,
        phone: updatedCustomer.phone,
        email: updatedCustomer.email,
        address: updatedCustomer.address,
        company: updatedCustomer.company,
        customer_type: updatedCustomer.customerType,
        tax_number: updatedCustomer.taxNumber,
        notes: updatedCustomer.notes,
      });

      fetchCustomers();
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  // Delete Customer
  const deleteCustomer = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/customers/${id}`);
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  // Search Filter
  const filteredCustomers = customers.filter((customer) =>
    customer.full_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Customer Management
        </h1>

        <p className="text-slate-500">
          Manage all your customers from one place.
        </p>
      </div>

      <CustomerToolbar
        search={search}
        setSearch={setSearch}
        addCustomer={addCustomer}
      />

      <CustomerTable
        customers={filteredCustomers}
        updateCustomer={updateCustomer}
        deleteCustomer={deleteCustomer}
      />
    </div>
  );
}