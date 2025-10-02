import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import FileTree from "@/components/FileTree";
import CodeEditor from "@/components/CodeEditor";
import AIPanel from "@/components/AIPanel";
import DiffViewer from "@/components/DiffViewer";

const Editor = () => {
  const { repoId } = useParams();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<string | null>("src/App.tsx");
  const [showDiff, setShowDiff] = useState(false);

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/50 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-primary" />
            <span className="font-semibold">e-commerce-platform</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDiff(!showDiff)}
            className="border-primary/20"
          >
            {showDiff ? "Hide Diff" : "Show Diff"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* File Tree */}
        <FileTree
          selectedFile={selectedFile}
          onSelectFile={setSelectedFile}
        />

        {/* Editor or Diff Viewer */}
        <div className="flex-1 flex flex-col">
          {showDiff ? (
            <DiffViewer />
          ) : (
            <CodeEditor selectedFile={selectedFile} />
          )}
        </div>

        {/* AI Panel */}
        <AIPanel />
      </div>
    </div>
  );
};

export default Editor;
