import { type FunctionComponent } from "react";


export const Navbar: FunctionComponent = () => {
  return (  
    <nav className="flex mr-2 justify-evenly">
      <div className="logo">
        <a href="#">
          <img src="src/assets/bigWebLogo.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
        </a>
      </div>
      <div>
        <ul className="flex m-1 gap-1 list-none">
          <li className="list-none">
            <a href="#" className="no-underline text-blue-500 hover:underline">
              WOMEN
            </a>
          </li>
          <li>
            <a href="#" className="">
              MEN
            </a>
          </li>
          <li>
            <a href="">KIDS</a>
          </li>
          <li>
            <a href="">BABY</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-2">
          <li>
            <a href="">SEARCH</a>
          </li>
          <li>
            <a href="">CUSTOMER</a>
          </li>
          <li>
            <a href="">PRIVACY</a>
          </li>
          <li>
            <a href="">SHOP</a>
          </li>
          <li>
            <a href="">MENU</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};