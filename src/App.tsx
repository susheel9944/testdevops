import { useState } from "react";
import About from "./about/about";

type Iprops = {
  firstname: string;
  city: string;
  state: string;
};
const data = {
  firstname: "",
  city: "",
  state: "",
};
function App() {
  const [formdata, setFormdata] = useState<Iprops>(data);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Name is:{formdata.firstname} </p>
        <p>City: {formdata.city}</p>
        <p>State: {formdata.state}</p>
        <input
          type="text"
          name="firstname"
          onChange={handleOnChange}
          value={formdata.firstname}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="city" // Match the name attribute to the property name
          onChange={handleOnChange} // Bind the input value to formdata.city
          value={formdata.city}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="state"
          onChange={handleOnChange}
          value={formdata.state}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <>
        <div style={{ width: "500px", height: "400px", color: "red" }}>
          Hello world this is susheel kumar
        </div>
        <div style={{ width: "500px", height: "400px", color: "red" }}>
          Hello world this is susheel kumar
        </div>
        <div style={{ width: "500px", height: "400px", color: "red" }}>
          Hello world this is susheel kumar
        </div>
        <div style={{ width: "500px", height: "400px", color: "red" }}>
          Hello world this is susheel kumar
        </div>
        <div style={{ width: "500px", height: "400px", color: "red" }}>
          Hello world this is susheel kumar
        </div>
        <About />
      </>
    </>
  );
}

export default App;
