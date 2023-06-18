
export default function TempSpan({ temp }) {
  return (
    <span style={{ position: "relative", fontSize: 30 }}>
      {temp.toFixed()}
      <span style={{
        position: "absolute",
        top: 5,
        right: -17,
        fontSize: 35
      }}>°</span>
    </span>
  );
}