import "./GirlPhoto.scss";

function GirlPhoto({ img, style }) {
    return (
        <div
            style={{ backgroundImage: `url("${img.preview}")` }}
            cx="girl-preview"
        >
            <div
                style={{ backgroundImage: `url("${img.src}")` }}
                {...style}
                cx="girl-photo"
                alt="Фото девушки"
            />
        </div>

    );
}
GirlPhoto.propTypes = {
    style: PropTypes.instanceOf(Object),
    img: PropTypes.shape({
        preview: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    }).isRequired
};
GirlPhoto.defaultProps = { style: {} };
export default GirlPhoto;
