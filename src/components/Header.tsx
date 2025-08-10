import { type FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <div>
      {/* here will be the header section the web section template;  */}
      <div className="topTitle">
        <h1>Men's T-Shirts</h1>
        <p>
          Find your new favorite tees. Exlpore a wide range of comfotable, stylish T-shirts, from casual basics to
          trendy essentials.
        </p>
      </div>
      <div className="iconSections">
        <i></i>
        <p>Select a store to search store stock</p>
        {/* The input row line  */}
        <i></i> // this one for is the store; 
        <i></i> // in stock online only
        <i></i> // t-shirts
        <i></i> // options
        <i></i> // size
        <i></i> colors
        <i></i> // price
      </div>

      {/* Shop line up  */}
      <div className="shopLineUp">
        <h1>Shop the Line up</h1>
        {/* Here will be the images for the shoops  */}
      </div>
    </div>
  );
};
