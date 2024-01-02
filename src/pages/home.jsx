import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from "../assets/images/DNA_wallpaper.jpg";
import {
  ArrowBigDownIcon,
  ArrowDownCircleIcon,
  ArrowDownNarrowWide,
} from "lucide-react";

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
        {/* Hero section ================================================ */}
        <section className="absolute z-20 flex ">
          <div>
            <h1 className="text-white -rotate-90 text-1xl font-bold mt-[40vh]">
              A LITTLE BIT OF THIS, A LITTLE BIT OF THAT
            </h1>
          </div>
          <div className=" w-[80vw]">
            <h1 className="w-[60rem] text-white text-8xl mt-[200px]">
              <span className="bg-white text-black p-4 font-semibold">
                Leading
              </span>
              <span> the way</span>
              <br />
              <span className="leading-relaxed">in Genetic Mutations</span>
              <hr className="w-[40vw] border-dashed mt-6 opacity-40" />
            </h1>
          </div>
        </section>

        {/* Down arrow icon ================================================ */}
        <div className="flex justify-center text-white absolute bottom-0 w-screen mb-10 animate-bounce img-fade">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg">Lets Take a Look</p>
            <ArrowDownCircleIcon />
          </div>
        </div>

        {/* background image ================================================ */}
        <img
          className="w-screen h-screen opacity-40"
          src={Image}
          alt="DNA strands"
        />

        {/* Grid layout for creatures ================================================ */}
        <div className="fade-grid grid w-screen mx-0 grid-cols-1 laptop:grid-cols-2 laptop:grid-rows-3 desktop:grid-cols-3">
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
