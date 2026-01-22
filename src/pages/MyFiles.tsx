import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RecentAnalyses } from "@/components/dashboard/RecentAnalyses";
import { useToast } from "@/hooks/use-toast";

export default function MyFilesPage() {
  const { toast } = useToast();

  return (
    <DashboardLayout title="My Files" subtitle="Your recent uploads & analyses">
      <div className="space-y-8">
        <RecentAnalyses
          onViewReport={() =>
            toast({
              title: "Report",
              description: "Report view coming next.",
            })
          }
        />
      </div>
    </DashboardLayout>
  );
}
