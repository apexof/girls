import "../../components/App/App.scss";
import Header from "../../components/Header/Header";
import ChooseAge from "../../components/ChooseAge/ChooseAge";
import Sponsored from "../../components/Sponsored/Sponsored";
import PagesH1 from "../../components/PagesH1/PagesH1";

function Home() {
    return (
        <div cx="page-container">
            <Header />
            <PagesH1>Beautiful Girls from India</PagesH1>
            <Sponsored />
            <ChooseAge />
            <Sponsored />
        </div>
    );
}
export default Home;
