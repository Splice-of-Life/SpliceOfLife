import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BreedPage() {
  // gets the id from the url
  const { id } = useParams();
  const [creature, setCreature] = useState({});

  useEffect(() => {
    const getCreatures = async () => {
      try {
        const response = await axios.get(`/api/creatures/${id}}`);
        // const response = await axios.get("/api/creatures/");
        const data = response.data;
        setCreature(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCreatures();
  }, []);

  return (
    <>
      <div>{/* <h1 className="heading">{creature.breed}</h1> */}</div>
      <div className="creature-container">
        <div className="creature-image">
          <img src="https://placehold.jp/400x500.png" alt="creature" />
        </div>
        <div className="creature-details">
          <h2>Breed: {creature.breed}</h2>
          <h2>Temperment: {creature.temperment}</h2>
          <h2>Lab: {creature.lab}</h2>
          <h2>Food: {creature.food}</h2>
          <h2>Price: {creature.price}</h2>
          <h2>In Stock: {creature.inStock ? "Yes" : "No"}</h2>
          <h2>Recommended: {creature.recommended ? "Yes" : "No"}</h2>
          <div className="description-text">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreedPage;
