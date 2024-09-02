import s from './Header.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.link}>
          <div className={s.logo}>
            <GlobalSvgSelector id={'logo'} />
          </div>
        </div>
        <div className={s.user}>
          <Button as="a">Sign In</Button>
        </div>
      </div>
    </div>
  );
};
