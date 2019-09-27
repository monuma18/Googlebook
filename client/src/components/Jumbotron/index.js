// import React from "react";
// import "./style.css";

// function Jumbotron() {
//   return (
//     <div className="jumbotron text-center">
//       <h1>React Recipes</h1>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
//         Powered by Recipe Puppy
//       </a>
//     </div>
//   );
// }

// export default Jumbotron;

import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">Charles M Bookshelf</a></span></h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google Books
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;
