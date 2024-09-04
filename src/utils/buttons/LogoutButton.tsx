import {IconButton} from "../../components/ui/icon-button/icon-button";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import s from './LogoutButton.module.scss'


export const LogoutButton = () => (
    <IconButton
        icon={<GlobalSvgSelector id="logout" />} // Applying specific styles to the icon
        label="Logout"
        className={s.button} // Additional custom styles
    />
);