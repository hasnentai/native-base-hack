import * as React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from 'native-base';

import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    username: '',
    email: '',
    password: '',
    error: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();

    auth
      .doCreateUserWithEmailAndPassword(formState.email, formState.password)
      .then((authUser) => {
        // this.setState(() => ({ ...INITIAL_STATE }));
        // this.props.history.push(routes.HOME);
        console.log('yahooooooooo');
        navigate('/');
      })
      .catch((error) => {
        setFormState((formState) => ({
          ...formState,
          error: error,
        }));
      });
  };

  React.useEffect(() => {
    auth.CheckSession((user) => {
      if (user) {
        navigate('/');
      } else {
        console.log('user not found');
      }
    });
  }, []);
  console.log(formState);
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={formState.email}
              onChange={(e) =>
                setFormState((formState) => ({
                  ...formState,
                  email: e.target.value,
                }))
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={formState.password}
              onChange={(e) =>
                setFormState((formState) => ({
                  ...formState,
                  password: e.target.value,
                }))
              }
            />
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl> */}
          <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;
