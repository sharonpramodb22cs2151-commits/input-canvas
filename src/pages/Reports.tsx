import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <DashboardLayout title="Reports" subtitle="Detailed analysis reports">
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Select a file from “My Files” to view a full report here.
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
