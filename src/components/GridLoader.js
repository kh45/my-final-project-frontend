import React from "react";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <HashLoader
          css={override}
          size={100} // or 150px
          color={"#D73641"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}