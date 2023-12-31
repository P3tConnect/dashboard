import Sidebar from "@/components/Sidebar";
import React from "react";

export default function DashboardLayout({ children } : { children : React.ReactNode }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}