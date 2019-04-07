import React, { Component } from "react";

import "./SplashScreen.css";

function LoadingMessage() {
  return (
    <div className="splash-screen">
      <div className="logo">
        <svg
          enableBackground="new 0 0 500 500"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="black" strokeMiterlimit="20">
            <g fill="transparent">
              <path
                className="path path__1"
                d="m386.7 171-49.8-18.1 40.5 70.3z"
              />
              <path
                className="path path__2"
                d="m254.4 119.6 75.8 27.7-26.3-45.7z"
              />
              <path
                className="path path__3"
                d="m393.2 373.4h-39.4l-17.4 97.9z"
              />
              <path className="path path__4" d="m428.7 318.3-30.2 52.1h60.3z" />
              <path
                className="path path__5"
                d="m389.5 172.1-9.7 55.1 48.9 85.1 60.4-103.9z"
              />
              <path
                className="path path__6"
                d="m427 315.3-48.1-83.5-24.6 138.6h40.7z"
              />
              <path
                className="path path__7"
                d="m169.8 147.3 75.9-27.7-49.6-18z"
              />
              <path
                className="path path__8"
                d="m144.2 370.4-23.7-137.5-48 83.2 31.2 54.3z"
              />
              <path
                className="path path__9"
                d="m489.4 205.3c-8.9-48-32-92.2-67.2-127.5-4.4-4.4-9-8.6-13.7-12.7l-18.4 103.9z"
              />
              <path
                className="path path__10"
                d="m334.6 148.8 52.6 19.2 18.4-103.4-98.8 36z"
              />
              <path
                className="path path__11"
                d="m112.9 171.2 9.1 53 41.1-71.3z"
              />
              <path className="path path__12" d="m41.2 370.4h59l-29.4-51.2z" />
              <path
                className="path path__13"
                d="m351.3 370.4 25.3-142.6-44.1-76.5-82.4-30.1-82.7 30.1-44.6 77.5 24.5 141.6z"
              />
              <path
                className="path path__14"
                d="m105.4 373.4 56.3 97.9-16.9-97.9z"
              />
              <path
                className="path path__15"
                d="m336 477.9c32-12 61.3-30.9 86.1-55.7 14.8-14.8 27.5-31.2 37.8-48.8h-63.3z"
              />
              <path
                className="path path__16"
                d="m490.5 211.9-60.1 103.4 31.6 54.7c20.6-36.2 31.5-77.3 31.5-120 0-12.9-1-25.6-3-38.1z"
              />
              <path
                className="path path__17"
                d="m40 373.4c10.4 17.6 23 34 37.8 48.8 24.2 24.2 52.7 42.7 83.7 54.8l-59.5-103.6z"
              />
              <path
                className="path path__18"
                d="m9.4 212.4c-1.9 12.3-2.9 24.9-2.9 37.6 0 42.8 10.9 83.8 31.5 120l31-53.9z"
              />
              <path
                className="path path__19"
                d="m404.5 61.8c-42.8-35.3-95.8-54.7-151.9-55.3l52.6 91.4z"
              />
              <path
                className="path path__20"
                d="m350.8 373.4h-203l18.2 105.3c26.6 9.7 54.9 14.8 84 14.8 28.6 0 56.5-4.9 82.6-14.3l-.6-.1z"
              />
              <path
                className="path path__21"
                d="m247.4 6.5c-56 .6-109 20-151.8 55.2l99.2 36.2z"
              />
              <path
                className="path path__22"
                d="m250.1 118 52.3-19-52.4-91-52.4 90.9z"
              />
              <path
                className="path path__23"
                d="m165.4 148.9 27.8-48.4-98.8-36 17.9 103.7z"
              />
              <path
                className="path path__24"
                d="m119.7 228.2-9.7-56-99.4 36.2 60.2 104.7z"
              />
              <path
                className="path path__25"
                d="m91.5 65.1c-4.7 4-9.3 8.3-13.7 12.7-35.2 35.2-58.3 79.4-67.2 127.4l98.9-36z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="splash-screen--message">
        Take a moment to connect with your inner self.
      </div>
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
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 7300);
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
