import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function BreedPage() {
  // gets the id from the url
  const { id } = useParams();
  const [creature, setCreature] = useState({});

  useEffect(() => {
    const getCreatures = async () => {
      try {
        const response = await axios.get(`/api/creatures/${id}`);
        setCreature(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCreatures();
  }, [id]); // Add id as a dependency to useEffect

  const handlebackbtn = () => {
    window.history.back();
  };

  // const handlecartbtn = () =>{
  //   console.log("cart button pushed");
  //   window.location.href = `/cart?id=${id}`;
    

  // };

  return (
    <>
      <div className="w-screen h-fit">
        <div className=" flex items-center justify-center gap-11 py-20">
          <div className="card-primary group relative overflow-hidden">
            <img
              className="w-[60rem] h-auto transform transition-transform hover:scale-125 hover:translate-y-1 duration-1000"
              src={creature.imageUrl}
              alt="creature"
            />
          </div>
          <div>
            <h2>Breed: {creature.breed}</h2>
            <h2>Temperament: {creature.temperment}</h2>
            <h2>Lab: {creature.lab}</h2>
            <h2>Food: {creature.food}</h2>
            <h2>Price: {creature.price}</h2>
            <h2>In Stock: {creature.inStock ? "Yes" : "No"}</h2>
            <h2>Recommended: {creature.recommended ? "Yes" : "No"}</h2>
            <div>
              <p>{creature.description}</p>
            </div>
            <button onClick={handlebackbtn} className="btn2 mt-8 ">
              Back
            </button>
            {/* this section conditionally renders an add to cart button if it is in stock */}
              { creature.inStock === true && (
                <>
                  <Link to= {`/cart?id=${id}` }>
                    <button className="btn2 mt-8 ">
                      Add to Cart
                    </button>
                  </Link>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BreedPage;
