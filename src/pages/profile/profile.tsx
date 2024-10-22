import { useState } from 'react';

import s from './profile.module.scss';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Avatar } from '../../components/ui/avatar';
import { Card } from '../../components/ui/card';
import { EditProfileForm } from '../../components/ui/editForm';
import { IconButton } from '../../components/ui/icon-button/icon-button';
import { Typography } from '../../components/ui/typography';
import { LogoutButton } from '../../utils/buttons/LogoutButton';

const user = {
  avatar: 'https://i.pravatar.cc/300',
  email: 'mail@mail.com',
  name: 'John Doe',
};

export const Profile = () => {
  const [edit, setEdit] = useState(false);

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
          {edit ? (
            <EditProfileForm
              onSubmit={() => {
                setEdit(false);
              }}
              initialValues={{ name: user.name }}
            />
          ) : (
            <>
              <div className={s.line}>
                <Typography as={'div'} variant={'h1'} className={s.userName}>
                  {user.name}
                </Typography>
                <IconButton icon={<GlobalSvgSelector id={'edit_profile'} />} onClick={() => setEdit(true)} />
              </div>
              <Typography as={'label'} className={s.label}>
                {user.email}
              </Typography>
              <LogoutButton />
            </>
          )}
        </div>
      </Card>
    </div>
  );
};
