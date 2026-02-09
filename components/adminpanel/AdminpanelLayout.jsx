"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/adminpanel/Appsidebar";



export const metadata = {
  title: "Admin Panel",
  description: "Secure Admin Dashboard",
};

const AdminpanelLayout = ({ children }) => {



  // Render layout for admin or superadmin
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminpanelLayout;