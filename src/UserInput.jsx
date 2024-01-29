import { useState } from "react";

const UserInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} placeholder={"Enter your input"} />
    </div>
  );
};

export default UserInput;
