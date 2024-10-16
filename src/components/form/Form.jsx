import React, { useContext, useState } from "react";
import Card from "../ui/Card";
import {ProdContext} from '../../store/store-context'

const Form = () => {
  const ctx = useContext(ProdContext)
  const [product, setProduct] = useState({
    id: "",
    price: "",
    name: "",
    category: "",
  });
  const handleProductAdd = (e) => {
    e.preventDefault();

    console.log("your new product: ", product);
    if (product.price <= 0) return alert("Price cannot be negative or 0");
    else if (product.name.trim().length === 0) return alert("Name cannot be empty");
    else if (product.id.trim().length === 0) return alert("ID cannot be empty");
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    };

    ctx.onSubmit(item);
    setProduct({
      id: "",
      price: "",
      name: "",
      category: "",
    });
  };
  return (
    
      <form
        className="bg-red-100 grid grid-cols-2 p-10 space-y-2"
        onSubmit={handleProductAdd}
      >
        <div className="flex justify-between mr-10">
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            id="id"
            value={product.id}
            onChange={(e) =>
              setProduct((prev) => {
                return { ...prev, id: e.target.value };
              })
            }
          />
        </div>
        <div className="flex justify-between mr-10">
          <label htmlFor="price">Selling price:</label>
          <input
            type="number"
            id="price"
            value={product.price}
            onChange={(e) =>
              setProduct((prev) => {
                return { ...prev, price: e.target.value };
              })
            }
          />
        </div>
        <div className="flex justify-between mr-10">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(e) =>
              setProduct((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
        </div>
        <div className="flex justify-between mr-10">
          <label htmlFor="category">Category:</label>
          <select
            value={product.category}
            id="category"
            onChange={(e) =>
              setProduct((prev) => {
                return { ...prev, category: e.target.value };
              })
            }
          >
            <option value="">Select an option</option>
            <option value="Electronics">Electronics</option>
            <option value="Food">Food</option>
            <option value="Skincare">Skincare</option>
          </select>
        </div>
        <button
          className="bg-blue-300 p-2 w-20 rounded-lg text-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    
  );
};

export default Form;
