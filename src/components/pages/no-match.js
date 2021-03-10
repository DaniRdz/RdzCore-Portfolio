import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="no-match">
      <Helmet>
        <title>Uuuupss... | RdzCore</title>
      </Helmet>
      <h2>We couldn't find that page</h2>
      <Link to="/">Go to HomePage</Link>
    </div>
  );
}
