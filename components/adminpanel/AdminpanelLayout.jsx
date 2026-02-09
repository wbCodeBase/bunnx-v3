"use client"
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import AppSidebar from "@/components/adminpanel/Appsidebar";
import AdminSidebar from "./AdminSidebar";



export const metadata = {
  title: "Admin Panel",
  description: "Secure Admin Dashboard",
};

const AdminpanelLayout = ({ children }) => {



  // Render layout for admin or superadmin
  return (
    <>
      {/* <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider> */}


      <div className="flex h-screen">
        <AdminSidebar role="admin" />
        <main className="flex-1 overflow-y-auto md:p-8 p-4 bg-gray-50">
          {children}
        </main>
      </div>

    </>
  );
};

export default AdminpanelLayout;