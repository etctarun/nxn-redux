import React, { useEffect } from "react";

import "./Boxes.css";

//Redux
import { connect } from "react-redux";

const Boxes = (props) => {
  useEffect(() => {
    const makeBox = () => {
      let n = props.id;
      const cont = document.querySelector("#boxContainer");
      for (let i = 0; i < n; i++) {
        const br = document.createElement("div");
        br.classList.add("break");
        cont.appendChild(br);
        for (let j = 0; j < n; j++) {
          const box = document.createElement("div");
          if (n < 50) {
            box.classList.add("bigSquare");
          } else if (n > 100) {
            box.classList.add("smallSquare");
          } else {
            box.classList.add("square");
          }

          cont.appendChild(box);
        }
      }
    };

    makeBox();
  }, [props.id]);

  return (
    <div className="container">
      {props.id ? (
        <h1>
          {props.id}x{props.id}
        </h1>
      ) : (
        <p></p>
      )}

      <div className="boxesContainer" id="boxContainer"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name.text,
  dob: state.dob.text,
  email: state.email.text,
  id: state.id.text,
});

export default connect(mapStateToProps)(Boxes);
