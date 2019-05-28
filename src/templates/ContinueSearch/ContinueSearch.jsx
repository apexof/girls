import GirlsList from "../../components/GirlsList/GirlsList";
import Sponsored from "../../components/Sponsored/Sponsored";
import PagesH1 from "../../components/PagesH1/PagesH1";
import "../../components/App/App.scss";

function ContinueSearch({ children, girlId }) {
    return (
        <div cx="page-container">
            {children}
            <PagesH1>Beautiful Girls from India</PagesH1>
            <Sponsored />
            <GirlsList girlId={girlId} />
            <Sponsored />
        </div>
    );
}
ContinueSearch.propTypes = {
    girlId: PropTypes.number,
    children: PropTypes.instanceOf(Object).isRequired
};
ContinueSearch.defaultProps = { girlId: undefined };

export default ContinueSearch;
