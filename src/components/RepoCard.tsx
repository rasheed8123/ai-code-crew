import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCode, Clock, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RepoCardProps {
  repo: {
    id: string;
    name: string;
    description: string;
    language: string;
    files: number;
    lastModified: string;
  };
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const navigate = useNavigate();

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      Go: "bg-cyan-500",
    };
    return colors[language] || "bg-gray-500";
  };

  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <FileCode className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">{repo.name}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{repo.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
              <span>{repo.language}</span>
            </div>
            <div className="flex items-center gap-1">
              <Code2 className="w-4 h-4" />
              <span>{repo.files} files</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{repo.lastModified}</span>
            </div>
          </div>
        </div>
        <Button
          className="bg-gradient-primary hover:opacity-90"
          onClick={() => navigate(`/editor/${repo.id}`)}
        >
          Open Editor
        </Button>
      </div>
    </Card>
  );
};

export default RepoCard;
