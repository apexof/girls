import GirlsList from "../../components/GirlsList/GirlsList";
import Sponsored from "../../components/Sponsored/Sponsored";
import PagesH1 from "../../components/PagesH1/PagesH1";
import "../../components/App/App.scss";

function ContinueSearch({ children, girlId, type, header }) {
    const style = !header ? { position: "relative" } : null;
    return (
        <div style={style} cx="page-container">
            {children}
            <PagesH1>Beautiful Girls from India</PagesH1>
            <Sponsored />
            <GirlsList type={type} girlId={girlId} />
            <Sponsored />
        </div>
    );
}
ContinueSearch.propTypes = {
    girlId: PropTypes.number,
    type: PropTypes.string,
    header: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired
};
ContinueSearch.defaultProps = {
    girlId: undefined, type: null, header: true
};

export default ContinueSearch;
