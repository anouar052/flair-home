import * as React from "react";

interface QuantityInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onQuantityChange: (quantity: number) => void;
}

const QuantityInput = React.forwardRef<HTMLInputElement, QuantityInputProps>(
  ({ quantity, onDecrease, onIncrease, onQuantityChange, className, ...props }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        onQuantityChange(value);
      }
    };

    return (
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={onDecrease}
          className="px-2 py-1 border rounded-md"
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={String(quantity)}
          onChange={handleInputChange}
          className="w-16 text-center border rounded-md"
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={onIncrease}
          className="px-2 py-1 border rounded-md"
        >
          +
        </button>
      </div>
    );
  },
);

QuantityInput.displayName = "QuantityInput";

export { QuantityInput };
