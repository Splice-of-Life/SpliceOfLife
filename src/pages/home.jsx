import "./home.css";

function HomePage() {



  // need to render cards with data once db is set up

  return (

    <>
      <header>
        <h1> Welcome to Splice Of Life</h1>

        <nav>
          <button id="accountButton"> Account</button>
          <button id="registerButton"> Register</button>
          <button id="loginButton"> Login </button>
          <button id="cartButton"> Cart </button>
        </nav>

      </header>

      <div id="body">

        <h1 className="heading"> Our Animals</h1>
        <div id="fieldOfCards">
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
          <div id="animalCard">
            {/* this will map from the database to fill breed and image */}
            <h2> breed </h2>

            {/* <img src = "./someImage.jpg " alt = "some image of a mutated animal /> */}
          </div>
        </div>
      </div>

      <footer>
        <h1> We sell the best mutated creatures known to man - Splice Of Life</h1>
      </footer>

    </>

  );
};

export default HomePage;