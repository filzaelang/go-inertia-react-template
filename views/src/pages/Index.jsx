/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./index.css";
import { Link } from "@inertiajs/react";

function Index({ exampleProp }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>{exampleProp}</h2>
      <Link href="/example-page">Link to example page</Link>
    </>
  );
}

export default Index;
