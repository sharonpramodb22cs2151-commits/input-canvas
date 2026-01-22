import { useToast } from "@/hooks/use-toast";
import { UploadAnalyzeCard } from "@/components/dashboard/UploadAnalyzeCard";
import { RecentAnalyses } from "@/components/dashboard/RecentAnalyses";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const Dashboard = () => {
  const { toast } = useToast();

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
    <DashboardLayout title="Dashboard" subtitle="Overview">
      <div className="space-y-8">
        <UploadAnalyzeCard onBrowse={handleBrowse} />
        <RecentAnalyses onViewReport={handleViewReport} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
