function CartPage() {
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
          <h1>Creatures</h1>
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
