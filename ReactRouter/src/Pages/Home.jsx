import cakes from "../data";
import CakeCard from "../Components/CakeCard";

function Home() {
    return (
        <div className="Home">
            <h2 style={{textAlign:"center", color:"white"}}>Welcome to Cake Shop</h2>

            <div style={{display:"flex", gap:"30px"}}>
                {cakes.map(cake => (
                    <CakeCard key={cake.id} cake={cake} />
                ))}
            </div>
        </div>
    );
}

export default Home;