import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, GitBranch, LogOut, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import RepoCard from "@/components/RepoCard";
import UploadDialog from "@/components/UploadDialog";

// Mock data
const mockRepos = [
  {
    id: "1",
    name: "e-commerce-platform",
    description: "Full-stack e-commerce application with React and Node.js",
    language: "TypeScript",
    files: 248,
    lastModified: "2 hours ago",
  },
  {
    id: "2",
    name: "ml-image-classifier",
    description: "Machine learning model for image classification",
    language: "Python",
    files: 89,
    lastModified: "1 day ago",
  },
  {
    id: "3",
    name: "task-management-api",
    description: "RESTful API for task management system",
    language: "JavaScript",
    files: 156,
    lastModified: "3 days ago",
  },
];

const Dashboard = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="text-xl font-bold">CodeAssist AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary/20 hover:bg-primary/10"
              onClick={() => setUploadDialogOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              New Repository
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="hover:bg-secondary"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Repositories</h1>
          <p className="text-muted-foreground">
            Manage and analyze your code repositories with AI assistance
          </p>
        </div>

        {/* Upload Options */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Button
            variant="outline"
            className="h-32 border-dashed border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
            onClick={() => setUploadDialogOpen(true)}
          >
            <div className="text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="font-semibold">Upload ZIP File</div>
              <div className="text-sm text-muted-foreground">Drag and drop or click to browse</div>
            </div>
          </Button>
          <Button
            variant="outline"
            className="h-32 border-dashed border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
            onClick={() => toast.info("GitHub clone feature coming soon!")}
          >
            <div className="text-center">
              <GitBranch className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="font-semibold">Clone from GitHub</div>
              <div className="text-sm text-muted-foreground">Import directly from your repositories</div>
            </div>
          </Button>
        </div>

        {/* Repository List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Repositories</h2>
          <div className="grid gap-4">
            {mockRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </main>

      <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
    </div>
  );
};

export default Dashboard;
