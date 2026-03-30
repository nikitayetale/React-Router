import { useState } from "react";

function Admin() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const addCake = () => {
        const newCake = { name, price, image };
        console.log(newCake);
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
            <h2>Admin Panel</h2>

            <input placeholder="Cake Name"  onChange={(e)=>setName(e.target.value)} />
            <br /> 
            
            <input placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
            <br />

            <input placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} />
            <br />

            <button onClick={addCake}>Add Cake</button>
             </div>
             </>
    );
}

export default Admin;