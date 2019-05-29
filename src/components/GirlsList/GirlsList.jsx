import { withRouter, Link } from "react-router-dom";
import ReactGA from "react-ga";
import girls from "../../girls-data/girls";
import GirlPhoto from "../GirlPhoto/GirlPhoto";
import s from "./GirlsList.scss";
import g from "../App/App.scss";

const random = require("random");

class GirlsList extends React.Component {
    state = { girlId: this.props.girlId }

    nextGirl = () => {
        const nextId = this.state.girlId + 1;
        const nextgirlId = girls[nextId] ? nextId : 0;
        this.ga("next girl")();
        this.setState({ girlId: nextgirlId });
    }

    ga = name => () => {
        if (this.props.type) {
            const type = this.props.type === "list" ? name : `${name} внизу профиля телки`;
            ReactGA.ga("send", "event", "button", "click", type);
        }
    }

    render() {
        const minAge = +localStorage.minAge;
        const maxAge = +localStorage.maxAge;
        const trueData = checkLS(minAge, maxAge);
        if (!trueData) {
            this.props.history.push("/");
            return null;
        }
        const id = this.state.girlId;
        let age = random.int(minAge, maxAge);
        if (!localStorage.girls) {
            const localGirls = { [id]: { age } };
            localStorage.girls = JSON.stringify(localGirls);
        } else {
            const parseLocal = JSON.parse(localStorage.girls);

            if (parseLocal[id]) {
                age = parseLocal[id].age;
            } else {
                parseLocal[id] = { age };
                localStorage.girls = JSON.stringify(parseLocal);
            }
        }

        return (
            <div cx="s.girls-list">
                <GirlPhoto img={girls[id].img} />
                <div cx="s.desc">
                    <span>{girls[id].name}, </span>
                    <span>{age} years old</span>
                </div>
                <div cx="s.buttons">
                    <Link
                        onClick={this.ga("whatsapp")}
                        to={`/girls/${id}`}
                        cx="g.btn g.btn-green"
                    >
                        WHATSAPP
                    </Link>
                    <button type="button" onClick={this.nextGirl} cx="g.btn g.btn-pink">NEXT GIRL</button>
                </div>
            </div>
        );
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function checkLS(min, max) {
    if (!min || !max) return false;
    if (!isNumeric(min) || !isNumeric(max)) return false;
    if (+min > +max) return false;
    return true;
}

GirlsList.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    girlId: PropTypes.number,
    type: PropTypes.string
};
GirlsList.defaultProps = { girlId: 0, type: null };

export default withRouter(GirlsList);
