import "./Result.css";

export default function Result({ data, restart }) {
  const isUp = data.status === "UP";

  return (
    <div className={`screen ${isUp ? "success" : "failure"}`}>
      <div className={`result-card ${isUp ? "blast" : "shake"}`}>
        
        <div className="emoji">
          {isUp ? "😄👍👍" : "😢👎"}
        </div>

        <h1>
          {isUp ? "API IS LIVE 🚀" : "API IS DOWN ❌"}
        </h1>

        <h2>
          {isUp ? "Successful Response" : "Request Failed"}
        </h2>

        <p>
          ⏱ Response Time: <b>{data.responseTime} ms</b>
        </p>

        <button onClick={restart}>
          Test Another API
        </button>
      </div>
    </div>
  );
}
