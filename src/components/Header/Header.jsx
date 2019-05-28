import icon from "./_chat.png";
import PinkBlock from "../PinkBlock/PinkBlock";

function Header() {
    return (
        <PinkBlock>
            <img src={icon} alt="Иконка сердца" />
            <span style={{ marginLeft: "9px" }}>
                LOVE&MEET
            </span>
        </PinkBlock>
    );
}
export default Header;
