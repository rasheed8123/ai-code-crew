import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

const DiffViewer = () => {
  const handleApprove = () => {
    toast.success("Changes approved! Creating pull request...");
  };

  const handleReject = () => {
    toast.error("Changes rejected");
  };

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">Code Changes</h2>
          <p className="text-sm text-muted-foreground">Review AI-suggested improvements</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleReject}
            className="border-destructive/50 hover:bg-destructive/10"
          >
            <X className="w-4 h-4 mr-2" />
            Reject
          </Button>
          <Button
            onClick={handleApprove}
            className="bg-success hover:bg-success/90"
          >
            <Check className="w-4 h-4 mr-2" />
            Approve
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Agent Summary */}
        <Card className="p-4 bg-card border-border">
          <h3 className="font-semibold mb-2">Changes by Agents</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500/50">
              Refactor Agent
            </Badge>
            <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/50">
              Doc Agent
            </Badge>
          </div>
        </Card>

        {/* Diff Display */}
        <Card className="bg-secondary border-border overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-border">
            {/* Before */}
            <div>
              <div className="bg-destructive/20 px-4 py-2 border-b border-border">
                <span className="text-sm font-semibold">Before</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code>{`const handleAddToCart = async () => {
  setIsLoading(true);
  try {
    await new Promise(resolve => 
      setTimeout(resolve, 1000));
    toast.success('Added to cart');
  } catch (error) {
    toast.error('Failed');
  } finally {
    setIsLoading(false);
  }
};`}</code>
              </pre>
            </div>

            {/* After */}
            <div>
              <div className="bg-success/20 px-4 py-2 border-b border-border">
                <span className="text-sm font-semibold">After</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code>{`/**
 * Adds product to cart with quantity
 * @param product - Product to add
 * @param quantity - Quantity to add
 */
const useAddToCart = (product, quantity) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const addToCart = async () => {
    setIsLoading(true);
    try {
      await cartApi.addItem({
        productId: product.id,
        quantity
      });
      toast.success(\`Added \${quantity} items\`);
    } catch (error) {
      console.error('Cart error:', error);
      toast.error('Failed to add to cart');
    } finally {
      setIsLoading(false);
    }
  };
  
  return { addToCart, isLoading };
};`}</code>
              </pre>
            </div>
          </div>
        </Card>

        {/* Improvements Summary */}
        <Card className="p-4 bg-card border-border">
          <h3 className="font-semibold mb-3">Improvements</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Extracted logic into reusable custom hook</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Added comprehensive JSDoc documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Improved error handling with proper logging</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Better user feedback with detailed toast messages</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default DiffViewer;
