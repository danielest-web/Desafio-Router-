import React from "react";

const Head = () => {
  React.useEffect(
    (props) => {
      document.title = props.title;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", props.description);
    },
    [props],
  );
  return <div></div>;
};

export default Head;
