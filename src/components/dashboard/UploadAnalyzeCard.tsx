import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { UploadCloud, File, Mic, Video, Image as ImageIcon, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Chip = {
  label: string;
  icon: LucideIcon;
};

const chips: Chip[] = [
  { label: "Video", icon: Video },
  { label: "Audio", icon: Mic },
  { label: "Image", icon: ImageIcon },
  { label: "Text", icon: FileText },
  { label: "PDF", icon: File },
];

export function UploadAnalyzeCard({ onBrowse }: { onBrowse?: () => void }) {
  return (
    <section className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Upload & Analyze</h1>
        <p className="text-sm text-muted-foreground">Upload media files for AI-powered processing.</p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={cn(
          "rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm",
          "p-5 sm:p-6",
        )}
      >
        <div
          className={cn(
            "rounded-2xl border border-dashed border-border/70",
            "bg-background/40",
            "px-4 py-10 sm:py-12",
            "flex flex-col items-center text-center gap-3",
          )}
        >
          <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center">
            <UploadCloud className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-foreground">Drag & drop files here</div>
            <div className="text-xs text-muted-foreground">or click to browse • up to 10 files</div>
          </div>
          <Button type="button" onClick={onBrowse} className="mt-2">
            Browse files
          </Button>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {chips.map((chip) => (
              <Badge key={chip.label} variant="secondary" className="gap-1.5">
                <chip.icon className="h-3.5 w-3.5" />
                {chip.label}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
