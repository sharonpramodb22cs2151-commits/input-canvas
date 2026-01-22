import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { UploadAnalyzeCard } from "@/components/dashboard/UploadAnalyzeCard";
import { RecentAnalyses } from "@/components/dashboard/RecentAnalyses";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleBrowse = () => {
    toast({
      title: "Browse files",
      description: "File upload UI is ready; wire to backend storage when you’re ready.",
    });
  };

  const handleViewReport = () => {
    toast({
      title: "Report",
      description: "Report view coming next.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <SidebarProvider defaultOpen>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar />

          <SidebarInset>
            <header className="sticky top-0 z-10 border-b border-border/50 bg-card/40 backdrop-blur-sm">
              <div className="h-14 px-4 sm:px-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="mr-1" />
                  <div className="hidden sm:block">
                    <div className="text-sm font-medium text-foreground">Welcome back</div>
                    <div className="text-xs text-muted-foreground truncate max-w-[280px]">{user?.email}</div>
                  </div>
                </div>

                <div className="flex-1 max-w-xl hidden md:block">
                  <Input placeholder="Search files…" />
                </div>

                <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-muted-foreground hover:text-foreground">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </Button>
              </div>
            </header>

            <main className="relative px-4 sm:px-6 py-6 sm:py-10">
              <div className="max-w-5xl mx-auto space-y-8">
                <UploadAnalyzeCard onBrowse={handleBrowse} />
                <RecentAnalyses onViewReport={handleViewReport} />
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
