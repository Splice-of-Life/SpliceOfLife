import { useEffect } from "react";
import { Link } from "react-router-dom";

function AccountPage() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="w-[60%] h-fit bg-white text-black flex flex-col justify-center items-center py-40 rounded-md">
          <section className="mb-20 flex flex-col gap-10">
            <h1>Username</h1>
            <h1>Password</h1>
            <h1>Email</h1>
          </section>
          <Link to="/admin">
            <section className="w-[700px] h-40 bg-gray-300 flex justify-center items-center mb-20 rounded-md">
              <h1>If Admin</h1>
            </section>
          </Link>
          <h1 className="mb-10">Purchase History</h1>
          <section className="w-[80%]">
            <hr className="mb-10" />
            <table></table>
          </section>
        </div>
      </section>
    </>
  );
}

export default AccountPage;
