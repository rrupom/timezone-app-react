import styled from "styled-components";
import useClock from "../../hooks/useClock";
import Word from "./Word";

const Container = styled.div`
  border: 1px solid skyblue;
  background: #e1e1e1;
  margin: 2rem auto;
  width: 100%;
  text-align: center;
`;

const Clock = ({ timeZone, title: person }) => {
  const { date, month, day, hour, minute, second, pm } = useClock({
    h24: true,
    timeZone,
  });

  return (
    <Container>
      <h2>
        <Word value={hour} /> : <Word value={minute} /> :{" "}
        <Word value={second} />
        {pm ? " PM" : " AM"}
      </h2>
      <span>TimeZone: {timeZone}</span>
      <h3>
        {date} {month} {new Date().getFullYear()}, {day}
      </h3>
      <h2>Person: {person}</h2>
    </Container>
  );
};

export default Clock;
