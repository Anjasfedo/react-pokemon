import { useState, Suspense } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<div>Loading . . .</div>}>
      <div className="App"></div>
    </Suspense>
  );
}

export default App;
