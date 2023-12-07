import ProductItem from './ProductItem';

function ProductList({ products, onFavoriteToggle }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onProductClick={handleProductClick}
          onHeartClick={onFavoriteToggle}
        />
      ))}


      {/* Display ProductDetailsModal */}
      {selectedProduct && <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default ProductList;





















