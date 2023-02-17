import PropTypes from "prop-types";
import { FriendItem } from "./FriendsListItem";
import { ListFriends } from "./FriendList.styled";

export const FriendsList = ({ friends }) => {
    return (
        <ListFriends>
            {friends.map(friend => (
                <FriendItem key={friend.id} friend={friend}/>
            ))}
        </ListFriends>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}