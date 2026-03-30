function CakeCard({ cake }) {
    return (
        <div className="card" style={{border:"1px solid #ccc", padding:"10px", width:"200px"}}>
            <img src={cake.image} alt={cake.name} width="100%" />
            <h3>{cake.name}</h3>
            <p>Rs{cake.price}</p>
        </div>
    );
}

export default CakeCard;