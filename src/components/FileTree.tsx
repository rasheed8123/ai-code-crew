import { useState } from "react";
import { ChevronRight, ChevronDown, File, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

const mockFileTree: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "App.tsx", type: "file" },
      { name: "index.tsx", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Header.tsx", type: "file" },
          { name: "Footer.tsx", type: "file" },
          { name: "ProductCard.tsx", type: "file" },
        ],
      },
      {
        name: "utils",
        type: "folder",
        children: [
          { name: "api.ts", type: "file" },
          { name: "helpers.ts", type: "file" },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "favicon.ico", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
];

interface FileTreeProps {
  selectedFile: string | null;
  onSelectFile: (file: string) => void;
}

const FileTree = ({ selectedFile, onSelectFile }: FileTreeProps) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["src", "src/components", "src/utils"])
  );

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const renderNode = (node: FileNode, path: string = "", depth: number = 0) => {
    const fullPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedFolders.has(fullPath);
    const isSelected = selectedFile === fullPath;

    if (node.type === "folder") {
      return (
        <div key={fullPath}>
          <button
            onClick={() => toggleFolder(fullPath)}
            className="w-full flex items-center gap-2 px-2 py-1 hover:bg-secondary/50 rounded text-sm"
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <Folder className="w-4 h-4 text-primary" />
            <span>{node.name}</span>
          </button>
          {isExpanded && node.children && (
            <div>
              {node.children.map((child) => renderNode(child, fullPath, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <button
        key={fullPath}
        onClick={() => onSelectFile(fullPath)}
        className={cn(
          "w-full flex items-center gap-2 px-2 py-1 hover:bg-secondary/50 rounded text-sm",
          isSelected && "bg-primary/20 hover:bg-primary/30"
        )}
        style={{ paddingLeft: `${depth * 12 + 32}px` }}
      >
        <File className="w-4 h-4 text-muted-foreground" />
        <span>{node.name}</span>
      </button>
    );
  };

  return (
    <div className="w-64 border-r border-border bg-card overflow-y-auto">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-sm">Files</h3>
      </div>
      <div className="p-2">
        {mockFileTree.map((node) => renderNode(node))}
      </div>
    </div>
  );
};

export default FileTree;
