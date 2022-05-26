import '../styles/Story.css';
import { Avatar } from '@mui/material';

export default function Story({ image, profileSrc, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar src={profileSrc} className="story_avatar" />
            <h4>{title}</h4>
        </div>
    )
}