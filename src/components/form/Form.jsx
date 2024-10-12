import React, { useState } from "react";
import Card from "../ui/Card";

const Form = () => {
  const [product, setProduct] = useState({
    id: "",
    price: "",
    name: "",
    category: "",
  });
  const handleProductAdd = (e) => {
    e.preventDefault()
    console.log("your new product: ",product)
    setProduct({
    id: "",
    price: "",
    name: "",
    category: "",
  })
  };
  return (
    <Card>
      <form
        className="bg-red-200 grid grid-cols-2 p-10"
        onSubmit={handleProductAdd}
      >
        <div>
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
        <div>
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
        <div>
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
        <div>
          <label htmlFor="category">Category:</label>
          <select value={product.category} id="category" onChange={(e)=>setProduct((prev)=>{return {...prev,category:e.target.value}})}>
            <option value="">Select an option</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="skincare">Skincare</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
