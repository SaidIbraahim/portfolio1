import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function HireMe() {
  return (
    <section className="hire-me">
      <h2>Why Hire Me</h2>
      <div className="qualities">
        {/* Workaholic */}
        <div className="quality">
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
          <h3>Workaholic</h3>
          <p>
            I’m a kind of person who can’t just stand around and do nothing. I
            have a tendency to do something productive.
          </p>
        </div>

        {/* Communicative */}
        <div className="quality">
          <FontAwesomeIcon icon={faComments} className="icon" />
          <h3>Communicative</h3>
          <p>
            I have a broad understanding of verbal vocabulary. Therefore, I can
            convey a message well to the receiver.
          </p>
        </div>

        {/* Cooperative */}
        <div className="quality">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <h3>Cooperative</h3>
          <p>
            Behind every successful project, there’s a great team. I can build
            good cooperation and remain consistent with the goal.
          </p>
        </div>

        {/* Perfectionist */}
        <div className="quality">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <h3>Perfectionist</h3>
          <p>
            I have a strong intuition and remain consistent with high-quality
            standards to present the most worthy result.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
