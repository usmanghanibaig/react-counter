import React from "react";

const Nav = props => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary p-2 m-2">
          {props.value}
        </span>
        Bucket
      </a>
    </nav>
  );
};

export default Nav;
