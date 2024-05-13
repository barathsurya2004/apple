import "./Face.css";
const Face = ({ x, y, absX, absY }) => {
  return (
    <div
      className="head"
      style={{
        left: `${absX * 2}%`,
        top: `${absY * 6}%`,
      }}
    >
      <div className="hair-and-face">
        <div className="hair-container">
          <div
            className="hair-1"
            style={{
              width: `${absX * 100 + 40}%`,
              height: `${absY * 100 + 60}%`,
            }}
          ></div>
          <div
            className="hair-2"
            style={{
              height: `${absY * 100 + 60}%`,
            }}
          ></div>
        </div>
        <div
          className="face"
          style={{
            top: `${(absY * 100) / 5 + 30}% `,
            left: `${absX * 20}%`,
          }}
        >
          <div className="eyes-container">
            <div className="eyes">
              <div
                className="eye"
                style={{
                  bottom: `${y / 100}%`,
                  left: `${x / 100}%`,
                }}
              >
                <div
                  className="ball"
                  style={{
                    left: `${x / 40}%`,
                    bottom: `${y / 40}%`,
                  }}
                >
                  <div className="pupil"></div>
                </div>
              </div>
              <div className="space-between"></div>
              {/* <div
                className="eye"
                style={{
                  bottom: `${y / 100}%`,
                  left: `${x / 100}%`,
                }}
              >
                <div
                  className="pupil"
                  style={{
                    bottom: `${y / 10}%`,
                    left: `${x / 10}%`,
                  }}
                ></div>
              </div> */}
              <div
                className="eye"
                style={{
                  bottom: `${y / 100}%`,
                  left: `${x / 100}%`,
                }}
              >
                <div
                  className="ball"
                  style={{
                    left: `${x / 20}%`,
                    bottom: `${y / 20}%`,
                  }}
                >
                  <div className="pupil"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nose-container">
            <div
              className="nose"
              style={{
                bottom: `${y / 20}%`,
                left: `${x / 10}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Face;
