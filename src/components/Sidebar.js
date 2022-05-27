import SidebarRow from './SidebarRow';
import '../styles/Sidebar.css';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { useStateValue } from '../StateProvider';

export default function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            {/* sending props title to SidebarRow child component */}
            <SidebarRow Icon={LibraryAddIcon} title='Pages' />
            <SidebarRow Icon={MessageIcon} title='Messenger' />
            <SidebarRow Icon={SupervisorAccountIcon} title='Friends' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreIcon} title='' />
        </div>
    )
}