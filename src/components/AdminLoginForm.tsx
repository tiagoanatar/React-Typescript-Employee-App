import React, { useReducer, useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

//state type

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

interface LoginForm {
  text: string
  color: string
  route: string
}

export const AdminLoginForm = (props:LoginForm) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const[redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      setRedirect(true)
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <Container>
      <Row>
        <Col>
          <Form>

            <Form.Floating className="mb-3">
              <Form.Control 
                isValid={state.isError}
                id="username"
                type="email"
                placeholder="Username"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
              />
              <label htmlFor="name">Username</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control 
                isValid={state.isError}
                id="password"
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
              <label htmlFor="role">Password {state.helperText}</label>
            </Form.Floating>

            <Button onClick={handleLogin} disabled={state.isButtonDisabled} variant={props.color} size="lg">
              {props.text}
            </Button>
            
            {redirect === true ? <Redirect to={props.route} /> : ''}

          </Form>
        </Col>
      </Row>
    </Container>
  );
}