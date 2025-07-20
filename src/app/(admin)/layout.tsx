"use client";

import { useEffect, useState } from "react";

import { AdminHeader } from "@/components/admin-header";
import { AdminSidebar } from "@/components/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior - collapse sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setIsSidebarCollapsed(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => {
    if (isMobile) {
      // On mobile, toggle the mobile menu overlay
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      // On desktop, toggle sidebar collapse
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleMobileBackdropClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuClose = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Mobile Backdrop */}
        {isMobileMenuOpen && isMobile && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={handleMobileBackdropClick}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                handleMobileBackdropClick();
              }
            }}
            tabIndex={-1}
            aria-hidden="true"
          />
        )}

        {/* Admin Sidebar */}
        <div
          className={`${
            isMobile
              ? `fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : "relative z-auto"
          }`}
        >
          <AdminSidebar
            isCollapsed={isSidebarCollapsed && !isMobile}
            onToggle={handleSidebarToggle}
            onMobileMenuClose={handleMobileMenuClose}
            isMobile={isMobile}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Admin Header */}
          <AdminHeader
            onSidebarToggle={handleSidebarToggle}
            showSidebarToggle={true}
            isMobile={isMobile}
          />

          {/* Main Content */}
          <main className="bg-muted/5 flex-1 overflow-y-auto">
            <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
              <div className="space-y-6">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
