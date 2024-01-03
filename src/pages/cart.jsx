
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const CartPage = () => {

  const [creature, setCreature] = useState({});
  const [itemsInCart, setItemsInCart] = useState([]);


  const location = useLocation();

  if (!location || !location.search) {
    console.log(`location not found`);
  };
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  // console.log(id);

  //get the information on the creature by id
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
  // console.log(creature);


  //assign information about the creature to the cart
  useEffect(() => {

    if (creature.id) {
      const cartItem = {
        cartItemId: creature.id,
        cartItemName: creature.breed,
        cartItemPrice: creature.price,
        cartItemQuantity: 1,
      };
      setItemsInCart((prevItems) => [...prevItems, cartItem]);
    };
  }, [creature]);
  console.log(itemsInCart);

  // **************** TODO *****************************
  //create cart.cjs
  //create routes to cart.cjs
  //create CRUD for cart.cjs
  //bring in the user id
  //copy items in cart to cart_tbl
  //display cart items
  //create button to remove cart items
  //create button to change quantity of an item
  // add total amount and display next to checkout button




  const handlebackbtn = () => {
    window.history.back();
  };

  return (
    <>
      <section className="w-screen h-screen flex py-40 px-60 text-black">
        <div className="w-[70%] bg-white rounded-l-md p-10">
          <h1>Customer Details</h1>
          <p>Username</p>
          <p>Email</p>
          <br />
          <hr className="bg-gray-500" />
          <br />
          <h1>Creatures  Price Quantity</h1>
          <ul> 
          {itemsInCart.map((item) => (
            <li> {item.cartItemName}  {item.cartItemPrice} {item.cartItemQuantity} </li>


          ))}
          </ul>
          
          <br />
          <hr className="bg-gray-500" />
          <br />
          <button onClick={handlebackbtn} className="btn2 mt-8">
            Back
          </button>
        </div>
        <div className="w-[30%] bg-gray-100 rounded-r-md p-10">
          <h1>Total: $$$</h1>
          <h1 className="btn3 w-fit h-fit">Checkout</h1>
        </div>
      </section>
    </>
  );
}

export default CartPage;
