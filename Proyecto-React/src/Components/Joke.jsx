import PropTypes from 'prop-types';

const Joke = ({ setup, punchline }) => {
    return (
        <div>
            <h3>{setup}</h3>
            <p>{punchline}</p>
        </div>
    );
};

Joke.propTypes = {
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired
};

export default Joke;