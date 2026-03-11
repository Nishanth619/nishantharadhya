import { MdScreenRotation } from "react-icons/md";
import "../styles/LandscapeLock.css";

const LandscapeLock = () => {
  return (
    <div className="landscape-lock">
      <div className="landscape-lock-content">
        <MdScreenRotation className="rotation-icon" />
        <h2>Please Rotate Your Device</h2>
        <p>This portfolio is best experienced in landscape mode.</p>
      </div>
    </div>
  );
};

export default LandscapeLock;
