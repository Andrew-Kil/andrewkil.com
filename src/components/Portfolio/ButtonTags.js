import React from "react";
import * as c from "./constants";

const ButtonTags = (props) => {
  return (
    <>
      <button
        value={c.SHOW_ALL}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.SHOW_ALL ? "active" : undefined}>
        {c.SHOW_ALL}
      </button>
      <button
        value={c.FRONTEND}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.FRONTEND ? "active" : undefined}>
        {c.FRONTEND}
      </button>
      <button
        value={c.FULL_STACK}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.FULL_STACK ? "active" : undefined}>
        {c.FULL_STACK}
      </button>
      <button
        value={c.RESPONSIVE_DESIGN}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.RESPONSIVE_DESIGN ? "active" : undefined}>
        {c.RESPONSIVE_DESIGN}
      </button>
      <button
        value={c.GAME}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.GAME ? "active" : undefined}>
        {c.GAME}
      </button>
    </>
  );
};

export default ButtonTags;
