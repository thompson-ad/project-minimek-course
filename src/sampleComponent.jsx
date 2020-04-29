import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = (state) => ({
  data: state.test.data,
});

class SampleComponent extends Component {
  render() {
    const { data } = this.props;

    return <div className="">Data from Redu: {data}</div>;
  }
}

export default connect(mapState)(SampleComponent);
