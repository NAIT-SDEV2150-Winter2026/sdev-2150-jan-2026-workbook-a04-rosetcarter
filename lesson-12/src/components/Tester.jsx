import { useState} from 'react';

export default function Tester() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search resources..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p className="alert alert-info mt-4">
        {searchTerm}
      </p>
    </>
  );
}


// export default function Tester() {
//   const [isOn, setIsOn] = useState(true);
//   return(
//     <button onClick={() => setIsOn(!isOn)}>
//       {isOn? "ON" : "OFF"}
//     </button>
//   );
// }