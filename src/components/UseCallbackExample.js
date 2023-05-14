// import React, { useCallback, useState } from "react";

// const ParentComponent = () => {
//   const [click, setClick] = useState(0);
//   //const increment = () => {
//   // setClick(click + 1);
//   const increment = useCallback(() => {
//     setClick(click + 1);
//   }, [click]); //La funzione verrà ricreata se il click cambia (Come da array dipendenze)//
//   //};
//   return (
//     <div>
//       <p>Il numero di click è {click}</p>
//       <button onClick={increment}>Cliccami</button>
//       <ChildComponent increment={increment} />
//     </div>
//   );
// };
// //Passiamo la props del padre al figlio, la funzione coì deve essere richiamata, per non richiamarla si usa USECALLBACK//
// const ChildComponent = ({ increment }) => {
//   return <button onClick={increment}>Cliccami</button>;
// };
