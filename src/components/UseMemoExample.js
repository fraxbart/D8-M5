// import React, { useState, useMemo } from "react";

// const UseMemoExample = () => {
//   const [count, setCount] = useState(0);
//   const [wordIndex, setWordIndex] = useState(0);
//   const words = ["Ciao", "useMemo", "Io", "Assolutissimamente"];
//   const word = words[wordIndex];
//   const expensiveFunction = (word) => {
//     let i = 0;
//     while (i < 2000000000) i++;
//     return word.length;
//   };

//   //const letterCount = expensiveFunction(word) //

//   const letterCount = useMemo(() => expensiveFunction(word), [word]);
//   return (
//     <div>
//       <h2>Calcolo del numero di lettere</h2>
//       <p className="text-dark">
//         {word} ha {letterCount} lettere
//       </p>
//       <button
//         onClick={() => {
//           const nextIndex = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
//           setWordIndex(nextIndex);
//         }}
//       >
//         Prossima parola
//       </button>
//       <hr></hr>
//       <h2>Incrementa il counter</h2>
//       <p>Valore counter: {count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Incrementa
//       </button>
//     </div>
//   );
// };
// export default UseMemoExample;
