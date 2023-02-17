import PropTypes from "prop-types";
import { ItemFriend } from "./FriendListItem.styled";
import { LabelOnline } from "./FriendListItem.styled";

export const FriendItem = ({ friend: { avatar, name, id, isOnline } }) => {
    return (
        <ItemFriend>
            <LabelOnline isOnline={isOnline}></LabelOnline>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </ItemFriend>
    )
};

FriendItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};