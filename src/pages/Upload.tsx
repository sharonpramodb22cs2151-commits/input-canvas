import { useToast } from "@/hooks/use-toast";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { UploadAnalyzeCard } from "@/components/dashboard/UploadAnalyzeCard";

export default function UploadPage() {
  const { toast } = useToast();

  return (
    <DashboardLayout title="Upload" subtitle="Upload & analyze your inputs">
      <div className="space-y-8">
        <UploadAnalyzeCard
          onBrowse={() =>
            toast({
              title: "Browse files",
              description: "File upload UI is ready; wire to backend storage when you’re ready.",
            })
          }
        />
      </div>
    </DashboardLayout>
  );
}
