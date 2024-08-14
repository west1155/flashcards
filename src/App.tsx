import {Button} from "./components/ui/button";
import {Typography} from "./components/ui/typography";
import {Checkbox} from "./components/ui/checkbox";
import {LoginForm} from "./components/auth/login-form/login-form";


export function App() {
  return <div>
    <Button variant="primary" as="a" href={"/"}>Hi</Button>
    <Button variant="secondary" as="a" href={"/"}>Huuuu</Button>
    <Typography variant="h2">dsfsdfgsdfg</Typography>
    <Checkbox onChange={() => {}} checked={true}></Checkbox>
    <Checkbox onChange={() => {}} checked={false}></Checkbox>

    <LoginForm />
  </div>
}
