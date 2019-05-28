import "./PinkBlock.scss";

function PinkBlock({ children, style }) {
    return (
        <div {...style} cx="pink-block">{children}</div>
    );
}

PinkBlock.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    style: PropTypes.instanceOf(Object)
};
PinkBlock.defaultProps = { style: {} };
export default PinkBlock;
