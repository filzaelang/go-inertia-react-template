import React from "react";
import { Link } from "@inertiajs/react";

export default function ExamplePage({ phrase }) {
  return (
    <>
      <h1>{phrase}</h1>
      <Link href="/">Link to home page</Link>
    </>
  );
}
