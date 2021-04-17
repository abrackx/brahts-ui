import "./Landing.css";
import main from "../../main.jpg"

export default function Landing() {
  return (
    <div id="landing-main">
        <img id="landing-image" src={main} alt="an electronics circuit" />
    </div>
  );
}