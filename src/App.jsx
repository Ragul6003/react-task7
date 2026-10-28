import { useState } from "react";
import { MyContext } from "./Context";
import Form from "./Form";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    city: "",
    address: "",
    department: "",
    designation: "",
  });

  const [theme, setTheme] = useState("light");
  const [submitted, setSubmitted] = useState(false);

  return (
    <MyContext.Provider
      value={{ data, setData, theme, setTheme, setSubmitted }}
    >
      <div className={theme}>
        <Form />

        {submitted && (
          <div className="result">
            <h2>Submitted Details</h2>
            {Object.entries(data).map(([key, value]) => (
              <p key={key}>
                <b>{key}:</b> {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;