import React, { useState } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../services/product";

const AddProductForm: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [remark, setRemark] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const productData = { productName, quantity, price, remark, description };
    console.log(productData);
    await addProduct(productData);
    navigate("/product", { replace: true });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <input
        type="text"
        placeholder="Remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
