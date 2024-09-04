import {Card} from "../../components/ui/card";
import {Typography} from "../../components/ui/typography";
import {Avatar} from "../../components/ui/avatar";
import s from './profile.module.scss'
import {LogoutButton} from "../../utils/buttons/LogoutButton";


const user = {
    name: 'John Doe',
    email: 'mail@mail.com',
    avatar: 'https://i.pravatar.cc/300'
}


export const Profile = () => {

    return (
        <div className={s.root}>
            <Card>
            <div className={s.content}>
                <Typography as="h2" variant="h2" className={s.title}>
                Personal Information
                </Typography>
                <div className={s.avatarContainer}>
                <Avatar size={96} image={user.avatar} />
                </div>
                <Typography as={'div'} variant={'h1'} className={s.userName}>{user.name}</Typography>
                <Typography as={'label'} className={s.label}>{user.email}</Typography>
                <LogoutButton />
            </div>
            </Card>
        </div>
    )
}