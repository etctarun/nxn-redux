import React from "react";
import styles from "./Details.module.css";

//Redux
import { connect } from "react-redux";

const Details = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <h1>Details</h1>
        <div className={styles.card}>
          <div>
            <p>Name:</p>
            <p>{props.name}</p>
            <br />
            <p>DOB:</p>
            <p>{props.dob}</p>
            <br />
            <p>Email:</p>
            <p>{props.email}</p>
            <br />
            <p>ID:</p>
            <p>{props.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name.text,
  dob: state.dob.text,
  email: state.email.text,
  id: state.id.text,
});

export default connect(mapStateToProps)(Details);
