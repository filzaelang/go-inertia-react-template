/* eslint-disable no-unused-vars */
import "./main.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
    const match = Object.entries(pages).find(([path]) => {
      return (
        path === `./pages/${name}.jsx` || path === `./pages/${name}/Index.jsx`
      );
    });

    return match?.[1];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
