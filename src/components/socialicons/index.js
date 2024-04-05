import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a
              href={socialprofils.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        )}

        {socialprofils.linkedin && (
          <li>
            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a
              href={socialprofils.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
