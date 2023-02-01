import "../styles.css";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';

export default function Sidebar({ isOpen }) {
    const sidebarClass = isOpen ? "sidebar open" : "sidebar";

    return (
        <div className={sidebarClass}>
            <div className="flex flex-col gap-y-2 mt-2">
                <div className="flex justify-center"><PersonIcon/></div>
                <div className="flex justify-center"><AccountCircleIcon/>  Users</div>
                <div className="flex justify-center"><SettingsIcon/>  Settings</div>
                <div className="flex justify-center"><MessageIcon/>  Messages</div>
            </div>
        </div>
    );
};
