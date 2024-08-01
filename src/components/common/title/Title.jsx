import React from "react";

const Title = ({ title, subtitle, titleClassName, subtitleClassName }) => {
  return (
    <div>
      <div id="heading">
        <h3 className={subtitleClassName}>{subtitle}</h3>
        <h1 className={titleClassName}>{title}</h1>
      </div>
    </div>
  );
};

export default Title;
