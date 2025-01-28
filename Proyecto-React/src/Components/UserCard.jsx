import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
    return (
        <div>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
            <p>{user.employment.title}</p>
            <p>{user.address.city}, {user.address.country}</p>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        employment: PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired,
        address: PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default UserCard;