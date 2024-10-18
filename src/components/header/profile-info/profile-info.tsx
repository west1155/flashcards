import {UserResponse} from "@/app/api/auth/auth";
import {ElementRef, forwardRef} from "react";
import {Avatar} from "@/components/ui/avatar";
import s from './profile-info.module.scss'
import {Typography} from "@/components/ui/typography";

// ProfileInfoProps type created from UserResponse but contains only 'avatar', 'name' and 'email' fields
export type ProfileInfoProps = Pick<UserResponse, 'avatar' | 'name' | 'email'>

export const ProfileInfo = forwardRef<ElementRef<'div'>, ProfileInfoProps>(
    ({ avatar, name, email }, ref) => {
        return (
            <div className={s.content} ref={ref}>
                <Avatar name={name} image={avatar} className={s.avatar} />
                <div>
                    <Typography variant="subtitle2">{name}</Typography>
                    <Typography variant="caption" className={s.email}>
                        {email}
                    </Typography>
                </div>
            </div>
        )
    }
)