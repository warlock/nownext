import { useState, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'antd/lib/button'
import { Button } from 'antd'

const LOGIN = gql`
  mutation Login($mail: String!, $password: String!) {
    login(mail: $mail, password: $password)
  }
`

const Login = () => {
  const [values, setValues] = useState({
    mail: '',
    password: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Fragment>
      <input id="mail" label="Mail" value={values.mail} onChange={handleChange('mail')} />
      <input
        id="password"
        label="Password"
        value={values.password}
        onChange={handleChange('password')}
        type="password"
      />
      <Mutation
        mutation={LOGIN}
        onCompleted={({ login }) => {
          console.log(login)
          //localStorage.setItem('token', login);
          //client.writeData({ data: { isLoggedIn: true } });
        }}
      >
        {login => (
          <Button
            onClick={() => {
              login({ variables: values })
            }}
          >
            Login
          </Button>
        )}
      </Mutation>
    </Fragment>
  )
}

export default Login
