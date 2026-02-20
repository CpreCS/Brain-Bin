export default function DefaultSnippet() {
  return `// Component that displays a counter
import { useState } from "react";

function Counter() {
  // useState lets us store and update a value
  const [count, setCount] = useState(0);

  return <p>{count}</p>;
}

// Render the component
export default Counter;`;
}
