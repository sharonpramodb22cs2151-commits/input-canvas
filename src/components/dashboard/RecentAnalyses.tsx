import { motion } from "framer-motion";
import { MoreHorizontal, FileText, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Risk = "Low" | "Medium" | "High";

type Analysis = {
  id: string;
  filename: string;
  kind: "Video" | "Image" | "Audio";
  meta: string;
  confidence: number;
  risk: Risk;
};

const analyses: Analysis[] = [
  {
    id: "1",
    filename: "political_speech.mp4",
    kind: "Video",
    meta: "4:23 • 87.5 MB • analyzed 5 mins ago",
    confidence: 94,
    risk: "High",
  },
  {
    id: "2",
    filename: "celebrity_photo.jpg",
    kind: "Image",
    meta: "1920×1080 • 2.3 MB • analyzed 15 mins ago",
    confidence: 67,
    risk: "Medium",
  },
  {
    id: "3",
    filename: "podcast_interview.mp3",
    kind: "Audio",
    meta: "12:45 • 18.7 MB • analyzed 1 hour ago",
    confidence: 18,
    risk: "Low",
  },
];

function riskBadgeVariant(risk: Risk): "default" | "secondary" | "destructive" {
  if (risk === "High") return "destructive";
  if (risk === "Medium") return "default";
  return "secondary";
}

export function RecentAnalyses({ onViewReport }: { onViewReport?: (id: string) => void }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Recent analyses</h2>
          <p className="text-sm text-muted-foreground">Latest processed files and confidence scores.</p>
        </div>

        <Button variant="secondary" className="gap-2">
          <FileText className="h-4 w-4" />
          Generate report
        </Button>
      </div>

      <div className="space-y-3">
        {analyses.map((a, idx) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * idx, duration: 0.3 }}
          >
            <Card className="p-4 sm:p-5 bg-card/50 backdrop-blur-sm border-border/60">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium">
                      {a.kind}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="font-medium text-foreground truncate">{a.filename}</div>
                        <Badge variant={riskBadgeVariant(a.risk)}>{a.risk} risk</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{a.meta}</div>
                    </div>
                  </div>
                </div>

                <div className="sm:w-[340px] w-full">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">Confidence</div>
                    <div className="text-sm font-semibold text-foreground">{a.confidence}%</div>
                  </div>
                  <Progress value={a.confidence} className="mt-2" />

                  <div className="mt-3 flex items-center justify-end gap-2">
                    <Button size="sm" onClick={() => onViewReport?.(a.id)}>
                      View report
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="ghost" aria-label="More actions">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
