import { Typography } from '../../components/ui/typography';
import { Card } from '../../components/ui/card';
import s from './CreatePass.module.scss';
import { CreatePassForm } from '../../components/auth/createpass-form';

export const CreatePass = () => {
  return (
    <div className={s.container}>
      <Card>
        <section className={s.content}>
          <Typography as="h1" variant="h1" className={s.title}>
            Create New Password
          </Typography>
          <CreatePassForm onSubmit={(data) => console.log(data)} />
        </section>
      </Card>
    </div>
  );
};
