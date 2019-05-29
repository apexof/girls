import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import s from "./ChooseAge.scss";
import g from "../App/App.scss";

class ChooseAge extends React.Component {
    state = {
        minAge: localStorage.minAge || 18,
        maxAge: localStorage.maxAge || 31
    };

    searchGirls = () => {
        localStorage.minAge = this.state.minAge;
        localStorage.maxAge = this.state.maxAge;
        localStorage.girls = "";
        ReactGA.ga("send", "event", "button", "click", "Поиск");
        this.props.history.push("/girls");
    };

    changeAge = typeAge => (e) => {
        this.setState({ [typeAge]: e.target.value });
    }

    render() {
        return (
            <div cx="s.choose-age">
                <h1>Choose girls age</h1>
                <form>
                    <span cx="s.input-desc">From:</span>
                    <input defaultValue={this.state.minAge} onChange={this.changeAge("minAge")} max="99" type="number" />
                    <span cx="s.input-desc">To:</span>
                    <input defaultValue={this.state.maxAge} onChange={this.changeAge("maxAge")} type="number" />
                    <button onClick={this.searchGirls} cx="g.btn g.btn-green" type="button">SEARCH</button>
                </form>
            </div>
        );
    }
}
ChooseAge.propTypes = { history: PropTypes.instanceOf(Object).isRequired };

export default withRouter(ChooseAge);
