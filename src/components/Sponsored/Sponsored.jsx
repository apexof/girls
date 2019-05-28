import "./Sponsored.scss";
import icon from "./_search-icon.svg";

function Sponsored() {
    return (
        <div cx="sponsored">
            <div cx="searches">
                SPONSORED SEARCHES
            </div>
            <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
                cx="ss-button"
            >
                <span>tinder online</span>
                <img src={icon} alt="Иконка лупы" />
            </a>
            <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
                cx="ss-button"
            >
                <span>online dating love</span>
                <img src={icon} alt="Иконка лупы" />
            </a>
        </div>
    );
}
export default Sponsored;
