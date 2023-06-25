import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../services/product";
import "./GetProducts.css";

interface Product {
  id: number;
  productName: string;
  qty: number;
  price: number;
  remark: string;
  description: string;
  seller: string;
}

function GetProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProduct();
      setProducts(data);
    })();
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <div>{product.productName}</div>
            <div>{product.qty}</div>
            <div>{product.price}</div>
            <div>{product.remark}</div>
            <div>{product.description}</div>
            <div>{product.seller}</div>
          </div>
        );
      })}
    </div>
  );
}

export default GetProducts;
