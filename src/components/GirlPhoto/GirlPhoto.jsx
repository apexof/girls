import "./GirlPhoto.scss";

function GirlPhoto({ img }) {
    return (
        <div
            style={{ backgroundImage: `url("${img.preview}")` }}
            cx="girl-preview"
        >
            <div
                style={{ backgroundImage: `url("${img.src}")` }}
                cx="girl-photo"
                alt="Фото девушки"
            />
        </div>

    );
}
GirlPhoto.propTypes = {
    img: PropTypes.shape({
        preview: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    }).isRequired
};
export default GirlPhoto;
