import { StreamList } from "@/utils/formData";
import { useState } from "react";

const CheckboxExample = () => {
    const [selectedStream, setSelectedStream] = useState<string>("");
  
    const handleOnChange = (value:string) => {
        setSelectedStream(value);
        console.log(selectedStream);
     };
  
     return (
       <div>
         <h3>Select Stream</h3>
         <ul>
           {StreamList.map((stream) => (
             <li key={stream.id}>
               <input
                 type="checkbox"
                 name="stream"
                 value={stream.value}
                 onChange={() => handleOnChange(stream.value)}
               />
               <label>{stream.name}</label>
             </li>
           ))}
         </ul>
       </div>
     );
  };
  
  export default CheckboxExample;