import PropTypes from "prop-types";
import { Card } from "./profile.styled";
import { Info } from "./profile.styled";
import { Image } from "./profile.styled";
import { Title } from "./profile.styled";
import { Description } from "./profile.styled";
import { StaticList } from "./profile.styled";
import { ListItem } from "./profile.styled";
import { StatValue } from "./profile.styled";

export const User = ({ user: { username, tag, location, avatar, stats: {followers, likes, views} } }) => (
    <Card>
        <Info>
            <Image
            src={avatar}
            alt="User avatar"
            />
            <Title>{username}</Title>
            <Description>@{tag}</Description>
            <Description>{location}</Description>
        </Info>

        <StaticList>
            <ListItem>
                <span>Followers</span>
                <StatValue>{followers}</StatValue>
            </ListItem>
            <ListItem>
                <span>Views</span>
                <StatValue>{views}</StatValue>
            </ListItem>
            <ListItem>
                <span>Likes</span>
                <StatValue>{likes}</StatValue>
            </ListItem>
        </StaticList>
    </Card>
)

User.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        }).isRequired,
    }).isRequired,
};
