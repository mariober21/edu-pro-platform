
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Settings } from "lucide-react";
import ProductsSection from "./navigation/ProductsSection";
import MarketingSection from "./navigation/MarketingSection";
import SalesSection from "./navigation/SalesSection";
import WalletSection from "./navigation/WalletSection";
import PartnershipSection from "./navigation/PartnershipSection";
import ToolsSection from "./navigation/ToolsSection";
import StandardNavItem from "./navigation/StandardNavItem";
import { ADMIN_ROUTES, adminRoutingService } from "@/services/AdminRoutingService";
import { adminSystemService } from "@/services/AdminSystemService";

interface SidebarNavigationProps {
  isSidebarOpen: boolean;
}

const SidebarNavigation = ({ isSidebarOpen }: SidebarNavigationProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    products: false,
    marketing: false,
    sales: false,
    partnership: false,
    tools: false,
    wallet: false
  });
  
  // Initialize section functionality based on admin system
  useEffect(() => {
    // Check if this is a financial route that needs correction
    const correctedPath = adminRoutingService.getFinancialPath(currentPath);
    if (correctedPath !== currentPath) {
      // In a real app we would use navigate() here
      // For demo, we'll just log it
      console.log(`Route would be corrected from ${currentPath} to ${correctedPath}`);
    }
  }, [currentPath]);
  
  // Auto expand the section based on current route
  useEffect(() => {
    const path = location.pathname;
    
    if (path.includes("/admin/products")) {
      setExpandedItems(prev => ({ ...prev, products: true }));
    } else if (path.includes("/admin/marketing")) {
      setExpandedItems(prev => ({ ...prev, marketing: true }));
    } else if (path.includes("/admin/orders") || path.includes("/admin/sales")) {
      setExpandedItems(prev => ({ ...prev, sales: true }));
    } else if (path.includes("/admin/partnership")) {
      setExpandedItems(prev => ({ ...prev, partnership: true }));
    } else if (path.includes("/admin/tools")) {
      setExpandedItems(prev => ({ ...prev, tools: true }));
    } else if (path.includes("/admin/wallet")) {
      setExpandedItems(prev => ({ ...prev, wallet: true }));
    }
  }, [location.pathname]);

  const toggleSection = (section: string) => {
    // First check if the section is functioning
    const sectionKey = section as any;
    if (!adminSystemService.getSectionStatus(sectionKey)) {
      // If section is not functioning, fix it
      adminSystemService.fixSection(sectionKey);
    }
    
    setExpandedItems(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="p-4">
      <nav className="space-y-2.5">
        {/* Dashboard */}
        <StandardNavItem
          title="ClickCenter"
          path="/admin"
          icon={LayoutDashboard}
          isSidebarOpen={isSidebarOpen}
          isActive={isActive("/admin")}
        />
        
        {/* Products Section */}
        <ProductsSection 
          isSidebarOpen={isSidebarOpen} 
          expandedItems={expandedItems} 
          toggleSection={toggleSection} 
        />
        
        {/* Marketing Section */}
        <MarketingSection 
          isSidebarOpen={isSidebarOpen} 
          expandedItems={expandedItems} 
          toggleSection={toggleSection} 
        />
        
        {/* Sales Section */}
        <SalesSection 
          isSidebarOpen={isSidebarOpen} 
          expandedItems={expandedItems} 
          toggleSection={toggleSection} 
        />
        
        {/* Wallet Section */}
        <WalletSection 
          isSidebarOpen={isSidebarOpen} 
          expandedItems={expandedItems} 
          toggleSection={toggleSection} 
        />
        
        {/* Partnership Section */}
        <PartnershipSection 
          isSidebarOpen={isSidebarOpen} 
          expandedItems={expandedItems} 
          toggleSection={toggleSection} 
        />
        
        {/* Tools Section */}
        <ToolsSection 
          isSidebarOpen={isSidebarOpen} 
          expandedItems={expandedItems} 
          toggleSection={toggleSection} 
        />
        
        {/* Other regular links */}
        <StandardNavItem
          title="Usuários"
          path="/admin/users"
          icon={Users}
          isSidebarOpen={isSidebarOpen}
          isActive={isActive("/admin/users")}
        />
        
        <StandardNavItem
          title="Conteúdo"
          path="/admin/content"
          icon={FileText}
          isSidebarOpen={isSidebarOpen}
          isActive={isActive("/admin/content")}
        />
        
        <StandardNavItem
          title="Configurações"
          path="/admin/settings"
          icon={Settings}
          isSidebarOpen={isSidebarOpen}
          isActive={isActive("/admin/settings")}
        />
      </nav>
    </div>
  );
};

export default SidebarNavigation;
