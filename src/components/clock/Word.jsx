const Word = ({ value }) => {
  return <span>{String(value).padStart(2, "0")}</span>;
};

export default Word;
