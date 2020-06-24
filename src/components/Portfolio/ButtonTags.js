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
        value={c.HTML5_CSS3}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.HTML5_CSS3 ? "active" : undefined}>
        {c.HTML5_CSS3}
      </button>
      <button
        value={c.SASS_SCSS}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.SASS_SCSS ? "active" : undefined}>
        {c.SASS_SCSS}
      </button>
      <button
        value={c.CSS_MODULES}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.CSS_MODULES ? "active" : undefined}>
        {c.CSS_MODULES}
      </button>
      <button
        value={c.BOOTSTRAP}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.BOOTSTRAP ? "active" : undefined}>
        {c.BOOTSTRAP}
      </button>
      <button
        value={c.MATERIAL_UI}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.MATERIAL_UI ? "active" : undefined}>
        {c.MATERIAL_UI}
      </button>
      <button
        value={c.JAVASCRIPT}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.JAVASCRIPT ? "active" : undefined}>
        {c.JAVASCRIPT}
      </button>
      <button
        value={c.REACT}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.REACT ? "active" : undefined}>
        {c.REACT}
      </button>
      <button
        value={c.REDUX}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.REDUX ? "active" : undefined}>
        {c.REDUX}
      </button>
      <button
        value={c.CONTEXT_API}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.CONTEXT_API ? "active" : undefined}>
        {c.CONTEXT_API}
      </button>
      <button
        value={c.NODE_EXPRESS}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.NODE_EXPRESS ? "active" : undefined}>
        {c.NODE_EXPRESS}
      </button>
      <button
        value={c.POSTGRESQL}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.POSTGRESQL ? "active" : undefined}>
        {c.POSTGRESQL}
      </button>
      <button
        value={c.JEST}
        onClick={(e) => props.handleClick(e)}
        id={props.selectedTag === c.JEST ? "active" : undefined}>
        {c.JEST}
      </button>
    </>
  );
};

export default ButtonTags;
