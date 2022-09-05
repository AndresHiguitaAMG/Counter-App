import PropTypes from 'prop-types';

const FirstApp = ({ titulo, subtitulo }) => {
    
    return (
        <>
            <h1>{titulo}</h1>
           <p>{subtitulo}</p>
        </>
    );
}

FirstApp.propTypes = {
    titulo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default FirstApp;