
import {Header} from "./components/header/Header";

import {Profile} from "./pages/profile/profile";
import {LogoutButton} from "./utils/buttons/LogoutButton";


export function App() {
  return <div>
      <Header />
      <Profile/>
      <LogoutButton/>
  </div>
}
