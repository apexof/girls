import "./PinkBlock.scss";

function PinkBlock({ children }) {
    return (
        <div cx="pink-block">{children}</div>
    );
}

PinkBlock.propTypes = { children: PropTypes.instanceOf(Object).isRequired };

export default PinkBlock;
