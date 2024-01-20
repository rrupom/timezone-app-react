import { useState } from "react";
import styled from "styled-components";
import Clock from "../components/clock/Clock";
import Button from "../components/UI/Buttons/Button";
import TextInput from "../components/UI/inputs/TextInput";
import Radio from "../components/UI/Radio/Radio";

const timeZones = {
  American: "America/New_York",
  Australian: "Australia/Sydney",
  Bangladesh: "Asia/Dhaka",
};

const ClockContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const App = () => {
  const [clocks, setClocks] = useState([]);
  const [radio, setRadio] = useState("");
  const [input, setInput] = useState("");

  const handleChange = () => {
    if (radio != "" && input != "") {
      setClocks([
        ...clocks,
        <Clock timeZone={timeZones[radio]} title={input} />,
      ]);
      setRadio("");
      setInput("");
    } else if (!radio && input) {
      alert("Please select clock variant");
    } else if (radio && !input) {
      alert("Please enter the name");
    } else {
      alert("Please select clock variant and name");
    }
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setRadio(value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      {clocks.length === 0 && (
        <h1 style={{ textAlign: "center" }}>No Clocks</h1>
      )}
      <ClockContainer>{clocks}</ClockContainer>
      <Radio
        name={"choice"}
        value={"American"}
        checked={radio === "American"}
        handleRadioChange={handleRadioChange}
      />
      <Radio
        name={"choice"}
        value={"Australian"}
        checked={radio === "Australian"}
        handleRadioChange={handleRadioChange}
      />
      <Radio
        name={"choice"}
        value={"Bangladesh"}
        checked={radio === "Bangladesh"}
        handleRadioChange={handleRadioChange}
      />
      <br />
      <TextInput
        placeholder={"Enter customer name"}
        value={input}
        onChange={handleInputChange}
      />
      <hr />
      <Button onClick={handleChange} style={{ width: "100%" }}>
        Add Clock
      </Button>
    </div>
  );
};

export default App;
