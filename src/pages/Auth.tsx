import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Github, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo credentials
    if (email === "demo@codeassist.ai" && password === "demo123") {
      toast.success("Welcome back!");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Try: demo@codeassist.ai / demo123");
    }
  };

  const handleSocialAuth = (provider: string) => {
    toast.success(`${provider} authentication coming soon!`);
    // For demo, auto login
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 bg-card border-border">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Welcome to CodeAssist AI</h1>
          <p className="text-muted-foreground">
            {isLogin ? "Sign in to continue" : "Create your account"}
          </p>
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full border-border hover:bg-secondary"
            onClick={() => handleSocialAuth("GitHub")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full border-border hover:bg-secondary"
            onClick={() => handleSocialAuth("Google")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Google
          </Button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>

        <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            <span className="font-semibold text-foreground">Demo Credentials:</span>
            <br />
            Email: demo@codeassist.ai
            <br />
            Password: demo123
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
