// import React, { useState } from "react";

// function App() {
//   const [txt, setText] = useState("");

//   const handleClick = (event) => {
//     event.preventDefault();
//     setText(event.target.form[0].value);
//   };

//   return (
//     <div
//       className="App"
//       style={{
//         textAlign: "center",
//       }}
//     >
//       <h1>Is Your State Clear Now?</h1>
//       <form>
//         <input
//           id="get1"
//           type="text"
//           placeholder="Type something"
//           style={{ marginBottom: "1rem" }}
//         />
//         <div>
//           <button onClick={handleClick} style={{ marginBottom: "1rem" }}>
//             Click me
//           </button>
//         </div>
//       </form>
//       <div>
//         <div
//           className="sky-bg"
//           style={{
//             backgroundColor: "skyblue",
//           }}
//         >
//           {txt !== "" && <h3>{txt}</h3>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
