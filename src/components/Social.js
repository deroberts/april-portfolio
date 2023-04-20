import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Social () {
  return (
    <div className="social">
        <h1>FIND ME ON...</h1>

        <ul class="social-links">
            <li class ="social-icons">
                <a href="https://github.com/deroberts" target="_blank" rel="noreferrer">
<FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </li>
            <li class ="social-icons">
                <a href="https://www.linkedin.com/in/derek-roberts-236948196/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </li>
        </ul>        
        <p>
            Feel free to connect with me!
        </p>
    </div>
    );
}

export default Social;
