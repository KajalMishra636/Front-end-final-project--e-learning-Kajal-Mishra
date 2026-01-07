import "../styles/Loader.css";

const Loader = ({ progress }) => {
  return (
    <div className="loader-screen">
      <div className="energy-loader">
        <svg className="progress-ring" width="160" height="160">
          <circle
            className="ring-bg"
            cx="80"
            cy="80"
            r="70"
          />
          <circle
            className="ring-progress"
            cx="80"
            cy="80"
            r="70"
            style={{
              strokeDashoffset: 440 - (440 * progress) / 100,
            }}
          />
        </svg>

        <div className="energy-core">
          <span>{progress}%</span>
        </div>
      </div>

      <p className="loader-text">Initializing Eduvion</p>
    </div>
  );
};

export default Loader;
