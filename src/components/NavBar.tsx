function Navbar() {
  // i forgot the propery name how to remove the underline in the anchor tag i have tried that in the css but not working in the tail wind.
  // well i have done it through using the app.css
  // r u in??
  // do you hav acess
  // alright can you check the tailwind css 
  // can you also run the terminal and run the npm run dev ?? 
  // why??
  /*
  
  what is the problem exactly?
  well i am having a problem about the underline . like you can see in the class name i have gaven 
  the lis none but there is still the underline in the text; 

  you gave it the class "no-underline" what class is that?
  hold on one thing at a time
  you have problems with removing underline on text, right?
  yess i do have that problesm. 
  okay where did you make the class "no-underline"? in CSS?
  well i were having a underline in the text and i tried the different property and 
  i searched it on the google and it show this class and i import this
  what? THat is not how CSS works. class names don't mean anything unless you make them in the CSS
  or import a library that makes them. Tailwind does not have a "no-underline" class and you did not make one
  so this class does nothing
  you have to use Tailwind documentation
  i already have tried that one. also 
  really?
  wait oh I see 

  have you run this code?
  yesh but not now .. 
  let me run it now. 
  do you find the problem where it is?
  yesh i searched remove underline property in the tialwind css and it says other's also and i <div
  okay so which property will work?
  */
  // I cannot run any terminal comman

              
  return (
    // still there is the problem and the problem is that. i don't know how to deal with the multiple components and how to handle it? 

    // <nav className="flex mr-2 justify-evenly">
    //   <div className="logo">
    //     <a href="#">
    //       <img src="src/assets/bigWebLogo.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
    //     </a>
    //   </div>
    //   <div>
    //     <ul className="flex m-1 gap-1 list-none">
    //       <li className="list-none">
    //         <a href="#" className="no-underline text-blue-500 hover:underline">
    //           WOMEN
    //         </a>
    //       </li>
    //       <li>
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
}
export default Navbar;
