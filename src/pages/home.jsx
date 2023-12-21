import NavBar from "../components/NavBar";
import "./home.css";
import { Link } from "react-router-dom";

function HomePage() {
  // need to render cards with data once db is set up

  return (
    <>
      <NavBar />

      <div id="body">
        <h1 className="heading"> Our Animals</h1>
        <div id="fieldOfCards">
          <Link to="/breed">
            <div id="animalCard">
              {/* this will map from the database to fill breed and image */}
              <h2> breed </h2>

              {/* <img src = "./someImage.jpg " alt = "some image of a mutated animal /> */}
            </div>
          </Link>

          <div id="animalCard">
            {/* this will map from the database to fill breed and image */}
            <h2> breed </h2>

            {/* <img src = "./someImage.jpg " alt = "some image of a mutated animal /> */}
          </div>
          <div id="animalCard">
            {/* this will map from the database to fill breed and image */}
            <h2> breed </h2>

            {/* <img src = "./someImage.jpg " alt = "some image of a mutated animal /> */}
          </div>
        </div>
      </div>

      <footer>
        <h1>
          {" "}
          We sell the best mutated creatures known to man - Splice Of Life
        </h1>
      </footer>
    </>
  );
}

export default HomePage;
