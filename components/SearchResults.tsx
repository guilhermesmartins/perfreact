import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

/**
 * React Render Cycle
 * 1. Create new component version
 * 2. Compare it with previous version
 * 3. If there are changes, will update with new changes
 */

/**
 * Memo use cases
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. MOST IMPORTANT: Component Medium to Big size
 */
export function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
}

/**
 * useMemo / useCallback
 *
 * 1. Calculos pesados
 * 2. Igualdade referencial - info repassada a um componente filho
 */
