import { Card } from "@/components/ui/card";

interface CodeEditorProps {
  selectedFile: string | null;
}

const mockCode = `import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(\`Added \${quantity} \${product.name} to cart\`);
    } catch (error) {
      toast.error('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-muted-foreground mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">\${product.price}</span>
        <Button 
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;`;

const CodeEditor = ({ selectedFile }: CodeEditorProps) => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* File Header */}
        <div className="border-b border-border bg-card px-4 py-2">
          <span className="text-sm font-mono">{selectedFile || "No file selected"}</span>
        </div>

        {/* Code Display */}
        <Card className="flex-1 m-4 bg-secondary border-border overflow-auto">
          <pre className="p-4 text-sm font-mono">
            <code className="language-typescript">{mockCode}</code>
          </pre>
        </Card>
      </div>
    </div>
  );
};

export default CodeEditor;
