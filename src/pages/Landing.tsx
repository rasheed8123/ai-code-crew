import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, GitBranch, Sparkles, Zap, FileCode, Brain, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Code2,
      title: "Smart Code Analysis",
      description: "Upload repositories and get instant AI-powered insights into your codebase structure and dependencies.",
    },
    {
      icon: Brain,
      title: "Multi-Agent System",
      description: "Specialized AI agents for debugging, refactoring, documentation, and testing work together seamlessly.",
    },
    {
      icon: FileCode,
      title: "Intelligent Refactoring",
      description: "AI suggests code improvements with before/after diffs that you can review and approve.",
    },
    {
      icon: Sparkles,
      title: "RAG-Powered Explanations",
      description: "Get detailed explanations of any function or class using retrieval-augmented generation.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Create PRs, run tests, and get notifications automatically through integrated workflows.",
    },
    {
      icon: GitBranch,
      title: "GitHub Integration",
      description: "Seamless integration with GitHub for cloning repos and creating pull requests.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="text-xl font-bold">CodeAssist AI</span>
          </div>
          <Link to="/auth">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Powered by Multi-Agent AI</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            Your AI-Powered
            <br />
            Code Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your repository, browse code with AI insights, and let specialized agents handle debugging, refactoring, documentation, and testing.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">Everything you need to understand and improve your code</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">Get started in three simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Repository</h3>
            <p className="text-muted-foreground">Upload a zip file or clone from GitHub to get started</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse & Analyze</h3>
            <p className="text-muted-foreground">Explore your code with AI-powered insights and explanations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Improve Code</h3>
            <p className="text-muted-foreground">Let AI agents refactor, document, and test your code</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <Card className="p-12 bg-gradient-primary text-center border-0">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to supercharge your development?</h2>
          <p className="text-white/90 text-lg mb-8">Join developers who are building better code with AI assistance</p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started Now
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 CodeAssist AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
