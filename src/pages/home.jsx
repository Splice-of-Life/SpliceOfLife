import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  // need to render cards with data once db is set up
  const [creatures, setCreatures] = useState([]);

  const getCreatures = async () => {
    try {
      const request = await fetch("/api/creatures");
      const response = await request.json();
      console.log(response);
      setCreatures(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCreatures();
  }, []);

  const handleClick = (id) => {
    console.log(`button was clicked`, id); // passed the id of the crature that was clicked

    //*********************  TODO  point clicked creature to the creature page ********************** */
  };

  return (
    <>
      <div id="body">
        <h1 className="heading"> Our Animals</h1>
        <div id="fieldOfCards">
          {/* this will map from the database to fill breed and image */}

          {creatures.map((creature) => (
            <Link key={creature.id} to={`/creature/${creature.id}`}>
              <div id="animalCard" onClick={() => handleClick(creature.id)}>
                <h2> {creature.breed}</h2>

                <img
                  src={creature.imageUrl}
                  alt="some image of a mutated animal"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
