import "./PagesH1.scss";

export default function PagesH1({ children }) {
    return (
        <h1 cx="pages-h1">{children}</h1>
    );
}

PagesH1.propTypes = { children: PropTypes.string.isRequired };
