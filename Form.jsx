import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  // Handler to update the state based on input name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {name.firstname} {name.lastname}
      <form>
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          value={name.firstname}
          onChange={handleChange}
        />
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          value={name.lastname}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
