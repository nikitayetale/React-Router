import React, { useState } from "react";

const AddCake = ({ addCake }) => {
  const [cake, setCake] = useState({
    name: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setCake({
      ...cake,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addCake(cake); // ✅ correct function call

    // reset form
    setCake({
      name: "",
      price: "",
      image: ""
    });
  };

  return (
    <div className="container">
      <h2>Add Cake</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Cake Name */}
        <input
          type="text"
          name="name"                 // ✅ added name
          placeholder="Cake Name"
          value={cake.name}          // ✅ controlled input
          onChange={handleChange}
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={cake.price}         // ✅ fixed value
          onChange={handleChange}
          required
        />

        {/* Image URL */}
        <input
          type="text"                // ✅ fixed type
          name="image"
          placeholder="Image URL"
          value={cake.image}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Cake</button>

      </form>
    </div>
  );
};

export default AddCake;