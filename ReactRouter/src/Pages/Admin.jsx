import React,{useState}from "react";

function Admin({addCake}){
    const [cake,setCake] = useState({
        name:"",
        price:"",
        image:""

    });

    const handleChange = (e) =>{
setCake({...cake, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addCake(cake);
        setCake({name:"",price:"",image:""});
    };

    return(
        <div class="container">
            <h2>Admin Panel</h2>

            <form onSubmit={handleSubmit}>

                <input type = "name" placeholder="Cake Name" value={cake.name} onChange={handleChange} require/>
                
                <br></br>
                
                <input type="number" name="price" placeholder="price" value={cake.price} onChange={handleChange} require/>
                
                <br></br>

                <input type="txet" name="image" placeholder="Image Url" value={cake.image} onChange={handleChange} require/>
                <br></br>

                <button type="submit">Add Cake</button>

        
            </form>
        </div>
    );
}

export default Admin;