import { withRouter, Link } from "react-router-dom";
import g from "../../components/App/App.scss";
import s from "./DetailGirl.scss";
import girls from "../../girls-data/girls";
import Header from "../../components/Header/Header";
import GirlPhoto from "../../components/GirlPhoto/GirlPhoto";
import Sponsored from "../../components/Sponsored/Sponsored";
import PagesH1 from "../../components/PagesH1/PagesH1";
import ContinueSearch from "../../templates/ContinueSearch/ContinueSearch";
import PinkBlock from "../../components/PinkBlock/PinkBlock";

class DetailGirl extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
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
                <div cx="g.page-container s.detail-girl">
                    <Header />
                    <PagesH1>{`${girl.name}, ${age} years old`}</PagesH1>
                    <Sponsored />
                    <GirlPhoto img={girl.img} />
                    <Link
                        to={`/get-whats-up/${girl.id}`}
                        cx="s.get-whats-up g.btn g.btn-pink"
                    >
                        GET HER WHATSAPP
                    </Link>
                    <Sponsored />
                    <div cx="s.desc">{girl.text}</div>
                    <Link
                        to={`/get-whats-up/${girl.id}`}
                        cx="s.get-whats-up g.btn g.btn-pink"
                    >
                        GET HER WHATSAPP
                    </Link>
                </div>

                <ContinueSearch header={false} type="profile" girlId={this.nextGirlId()}>
                    <PinkBlock>
                        <div style={{ marginLeft: "10px" }}>CONTINUE SEARCH</div>
                    </PinkBlock>
                </ContinueSearch>
            </>
        );
    }
}
DetailGirl.propTypes = {
    match: PropTypes.shape({ params: PropTypes.shape({ girlId: PropTypes.string }) }).isRequired,
    history: PropTypes.instanceOf(Object).isRequired
};
export default withRouter(DetailGirl);
