import React from "react";
import Card from "./Card";
function Content() {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        <h3 className="mx-auto text-3xl font-bold text-dark mb-10">
          Berikut adalah film terbaru
        </h3>
        <Card />
      </div>
    </div>
  );
}

export default Content;
