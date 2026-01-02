import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around   p-3 border-gray-800 items-center bg-cyan-700 border ">
        <div>
          <h2 className="text-3xl text-white">E-Grab</h2>
        </div>

        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-sky-100 rounded-xl outline-none pl-10 pr-3 py-2"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <div>
          <div>SignIn/SignUp</div>
          <div>Cart</div>
        </div>
      </div>

      <div className=" bg-gray-700 text-white ">
        <ul className="flex h-15 justify-around items-center text-2xl">
          <Link to="/mobiles">
            {" "}
            <li className="m-5 hover:text-gray-300">Mobiles</li>
          </Link>
          <Link to="/laptops">
            {" "}
            <li className="m-5 hover:text-gray-300">Laptops</li>
          </Link>
          <Link to="/Mens Fashion">
            {" "}
            <li className="m-5 hover:text-gray-300">Mens Fashion</li>
          </Link>
          <Link to="/watches">
            <li className="m-5 hover:text-gray-300">Watches</li>
          </Link>
          <Link to="/Womans Fashion">
            {" "}
            <li className="m-5 hover:text-gray-300">Womans Fashion</li>
          </Link>
          <Link to="/tv">
            {" "}
            <li className="m-5 hover:text-gray-300">Tv's</li>
          </Link>
          <Link to="/kitchen">
            {" "}
            <li className="m-5 hover:text-gray-300">Kitchen</li>
          </Link>
          <Link to="/Refrigerators">
            <li className="m-5 hover:text-gray-300">Refrigerators</li>
          </Link>
          <Link to="/Furniture">
            <li className="m-5 hover:text-gray-300">Furniture</li>
          </Link>
          <Link to="/Ac">
            {" "}
            <li className="m-5 hover:text-gray-300">AC</li>
          </Link>
          <Link to="/Books">
            <li className="m-5 hover:text-gray-300">Books</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
