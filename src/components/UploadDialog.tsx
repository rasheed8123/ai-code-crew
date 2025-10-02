import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Github } from "lucide-react";
import { toast } from "sonner";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UploadDialog = ({ open, onOpenChange }: UploadDialogProps) => {
  const [githubUrl, setGithubUrl] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast.success(`Uploading ${file.name}...`);
      setTimeout(() => {
        toast.success("Repository uploaded successfully!");
        onOpenChange(false);
      }, 1500);
    }
  };

  const handleGithubClone = () => {
    if (githubUrl) {
      toast.success("Cloning repository...");
      setTimeout(() => {
        toast.success("Repository cloned successfully!");
        onOpenChange(false);
        setGithubUrl("");
      }, 1500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle>Add Repository</DialogTitle>
          <DialogDescription>Upload a ZIP file or clone from GitHub</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload ZIP File</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop or click to browse
              </p>
              <Input
                type="file"
                accept=".zip"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <Button variant="outline" asChild>
                <label htmlFor="file-upload" className="cursor-pointer">
                  Choose File
                </label>
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">OR</span>
            </div>
          </div>

          {/* GitHub Clone */}
          <div>
            <label className="block text-sm font-medium mb-2">Clone from GitHub</label>
            <div className="flex gap-2">
              <Input
                placeholder="https://github.com/username/repo"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="bg-secondary border-border"
              />
              <Button onClick={handleGithubClone} className="bg-gradient-primary hover:opacity-90">
                <Github className="w-4 h-4 mr-2" />
                Clone
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
