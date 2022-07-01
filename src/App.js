import { NavBar } from './components/NavBar';
import { Box, useColorMode, Container } from 'native-base';
import {
  NativeBaseHackButton,
  NativeBaseHackButtonGroup,
} from './components/Buttons';
import { navBarTheme } from './theme/NativeBaseHackTheme';
import NativeBaseHackInput from './components/Input';
import NativeBaseHackSelect from './components/DropDown';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useRoutes,
} from 'react-router-dom';

import * as routes from './constants/routes';
import { auth } from './firebase';

//views
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import LandingPage from './views/LandingPage';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  let menu = ['Home', 'About Us', 'Contact', 'Hire Me'];
  let listItems = [
    { label: 'UI Designer', value: 'uid' },
    { label: 'UI Designer', value: 'uid' },
    { label: 'UI Designer', value: 'uid' },
    { label: 'UI Designer', value: 'uid' },
    { label: 'UI Designer', value: 'uid' },
  ];

  React.useEffect(() => {
    auth.CheckSession((user) => {
      if (user) {
        console.log(user, 'login hai');
        // window.open('/');
        // if (user) {
        //   firebase.auth().signOut()
        // } else {
        //   this.$router.push('/lobby')
        // }
        // window.push
      } else {
        console.log('naa not login');
        // will get to here from a logout event
        // this.$router.push('/login')
      }
    });
  }, []);

  return (
    <Box
      bg={colorMode === 'light' ? 'warmGray.50' : 'coolGray.900'}
      height="100vh"
    >
      <BrowserRouter>
        <Routes>
          <Route exact path={routes.LANDING} element={<LandingPage />} />
          <Route exact path={routes.SIGN_IN} element={<SignIn />} />
          <Route exact path={routes.SIGN_UP} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
