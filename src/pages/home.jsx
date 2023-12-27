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

  return (
    <>
      <div>
        <h1> Our Animals</h1>
        <div className="grid w-screen mx-0 grid-cols-1 laptop:grid-cols-2 laptop:grid-rows-3 desktop:grid-cols-3">
          {/* this will map from the database to fill breed and image */}

          {creatures.map((creature) => (
            <Link key={creature.id} to={`creatures/${creature.id}`}>
              <div className="card-primary group relative overflow-hidden">
                <img
                  className="w-full h-auto"
                  src={creature.imageUrl}
                  alt="some image of a mutated animal"
                />
                <div className="img-text-overlay">
                  <h2 className="text-6xl font-bold">{creature.breed}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
