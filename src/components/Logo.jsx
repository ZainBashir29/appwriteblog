import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-Io8326W9P-MoF2TuHj_vJf0wZenWQ41w&s"
        alt="logo"
        width={width}
        className="rounded-lg"
      />
    </div>
  );
}

export default Logo;
