
function About (props) {
    return (
        <aside>
            <img src={props.image} ></img>
            <p>{props.about}</p>
        </aside>
    );
}

About.defaultProps = {
    image : "https://via.placeholder.com/215"
};

export default About;