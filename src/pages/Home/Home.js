import React, { useRef } from "react";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { setName } from "../../redux/actions/form";
import { setEmail } from "../../redux/actions/form";
import { setId } from "../../redux/actions/form";
import { setDob } from "../../redux/actions/form";

const Home = (props) => {
  const history = useHistory();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const idRef = useRef(null);
  const dobRef = useRef(null);

  function isValidEmail(val) {
    let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return 0;
    } else {
      return 1;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>HOME</h1>
        <div className={styles.form}>
          <form
            onSubmit={(e) => {
              let name = nameRef.current.value;
              let email = emailRef.current.value;
              let dob = dobRef.current.value;
              let id = idRef.current.value;
              if (isValidEmail(email) && id <= 350) {
                props.setNameText(name);
                props.setEmailText(email);
                props.setDobText(dob);
                props.setIdText(id);
                history.push("/home/boxes");
              } else {
                if (id > 350) {
                  alert("Please enter id below 350 ");
                } else {
                  alert("Email is not valid");
                }
              }
              e.preventDefault();
            }}
          >
            <div>
              <p className={styles.fields}>NAME: </p>
              <input
                className={styles.inp}
                type="text"
                required
                placeholder="Name"
                ref={nameRef}
                id="input"
              />

              <p className={styles.fields}>DOB: </p>
              <input
                className={styles.inp}
                type="date"
                id="dob"
                required
                ref={dobRef}
              />

              <p className={styles.fields}>ID:</p>
              <input
                className={styles.inp}
                type="number"
                placeholder="Id"
                id="id"
                required
                ref={idRef}
              />

              <p className={styles.fields}>EMAIL: </p>
              <input
                className={styles.inp}
                type="text"
                placeholder="Email"
                id="email"
                required
                ref={emailRef}
              />

              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNameText: (name) => dispatch(setName(name)),
    setDobText: (dob) => dispatch(setDob(dob)),
    setEmailText: (email) => dispatch(setEmail(email)),
    setIdText: (id) => dispatch(setId(id)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
