import React, { Component } from "react";

import "./SplashScreen.css";

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Take a moment to connect with your inner self.
      <div className="loading-dot">.</div>
    </div>
  );
}

function SplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      // setTimeout(() => {
      //   this.setState({
      //     loading: false
      //   });
      // }, 50000);
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default SplashScreen;
