"use client";

import "../template.css";

import AdminpanelLayout from "@/components/adminpanel/AdminpanelLayout";
import ActiveSlugManage from "@/components/adminpanel/ActiveSlugManage";

const ActiveSlug = () => {

  return (
    <AdminpanelLayout>

      <ActiveSlugManage />
      
    </AdminpanelLayout>
  );
};

export default ActiveSlug;

