import React, { useState } from "react";

function Admin() {
    const [cake, setCake] = useState({
        name: "",
        price: "",
        image: ""
    });

    const handleChange = (e) => {
        setCake({ ...cake, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/cakes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cake)
            });

            const result = await response.json();
            console.log(result);
            alert(result.message);

            // Clear form
            setCake({ name: "", price: "", image: "" });

        } catch (error) {
            console.error('Error adding cake:', error);
            alert("Error adding cake");
        }
    };

    return (
        <div className="container">
            <h2>Admin Panel</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Cake Name"
                    value={cake.name}
                    onChange={handleChange}
                    required
                />

                <br />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={cake.price}
                    onChange={handleChange}
                    required
                />

                <br />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={cake.image}
                    onChange={handleChange}
                    required
                />

                <br />

                <button type="submit">Add Cake</button>

            </form>
        </div>
    );
}

export default Admin;