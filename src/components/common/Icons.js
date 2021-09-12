import React from "react";

function Icons(props) {
  const custom_styles = {
    color: props.color || null,
  };

  return (
    <li className="nav-item">
      <a className="nav-link" href={props.pagelink} title={props.title}>
        <i className={props.iclass} style={custom_styles}></i>
        <span className="menu-title sr-only"> {props.title} </span>
      </a>
    </li>
  );
}

export default Icons;
