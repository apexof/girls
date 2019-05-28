import { withRouter } from "react-router-dom";
import Sponsored from "../../components/Sponsored/Sponsored";
import g from "../../components/App/App.scss";
import s from "./GetWhatsUp.scss";
import girls from "../../girls-data/girls";
import PinkBlock from "../../components/PinkBlock/PinkBlock";
import ContinueSearch from "../../templates/ContinueSearch/ContinueSearch";
import PagesH1 from "../../components/PagesH1/PagesH1";
import Header from "../../components/Header/Header";
import GirlPhoto from "../../components/GirlPhoto/GirlPhoto";
import Timer from "../../components/Timer/Timer";

class GetWhatsUp extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    nextGirlId = () => {
        const girl = girls[this.props.match.params.girlId];
        const nextId = girl.id + 1;
        return girls[nextId] ? nextId : 0;
    };

    render() {
        const girl = girls[this.props.match.params.girlId];
        if (!localStorage.girls || !JSON.parse(localStorage.girls)[girl.id].age) {
            this.props.history.push("/");
            return null;
        }
        const localGirls = JSON.parse(localStorage.girls);
        const age = localGirls[girl.id].age;
        return (
            <>
                <div cx="g.page-container s.get-whats-up">
                    <Header />
                    <PagesH1>{`${girl.name}, ${age} years old`}</PagesH1>
                    <Sponsored />
                    <Timer />
                    <GirlPhoto img={girl.img} />
                </div>

                <ContinueSearch girlId={this.nextGirlId()}>
                    <PinkBlock>
                        <div style={{ marginLeft: "10px" }}>CONTINUE SEARCH</div>
                    </PinkBlock>
                </ContinueSearch>
            </>
        );
    }
}

GetWhatsUp.propTypes = {
    match: PropTypes.shape({ params: PropTypes.shape({ girlId: PropTypes.string }) }).isRequired,
    history: PropTypes.instanceOf(Object).isRequired
};
export default withRouter(GetWhatsUp);
