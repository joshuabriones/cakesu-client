import { Routes, Route } from "react-router-dom";
import Dashboard from "@/features/dashboard/components/Dashboard";

import { AppSidebar } from "@/components/admin/AppSidebar";
import ProductsListing from "./ProductsListing";
import OrdersListing from "./OrdersListing";
import Users from "./Users";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Admin = () => {
  return (
    <div className="w-full ">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsListing />} />
            <Route path="orders" element={<OrdersListing />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<div>PAGE NOT FOUND ❌</div>} />
          </Routes>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Admin;
