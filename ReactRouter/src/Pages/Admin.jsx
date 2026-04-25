import { useState } from "react";

function Admin() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [flavor, setFlavor] = useState(""); 

    const addCake = () => {
        const newCake = { name, price, image, flavor };
        console.log(newCake);

        async function postCake() {
            try {
                const response = await fetch('http://localhost:3000/cakes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newCake)
                });
                const result = await response.json();
                console.log(result);
                alert(result.message);
            } catch (error) {
                console.error('Error adding cake:', error);
            }
        }

        postCake();
        alert("Cake Added (Check Console)");
    };

    return (
        <>
         <style>
                {`
                    .admin{
                        text-align: center;
                        margin: 250px;
                    }

                `}
            </style>
        <div className="container">
            <h2>Order Panel</h2>

            <input placeholder="Cake Name" onChange={(e)=> setName(e.target.value)} />
            <br />

           <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
        <option value="">Select Flavor</option>
        <option value="chocolate">Chocolate</option>
        <option value="vanilla">Vanilla</option>
        <option value="strawberry">Strawberry</option>
        <option value="butterscotch">Butterscotch</option>
        

      </select>

            <br /> 
            
            <input placeholder="Price" onChange={(e)=> setPrice(e.target.value)} />
            <br />

            <input placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} />
            <br />

            <button onClick={addCake}>Order Panel</button>
             </div>
             </>
    );
}

export default Admin;