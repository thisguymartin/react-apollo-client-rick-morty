import React, {useState} from 'react'
import {useMutation} from 'react-apollo'
import {gql} from 'apollo-boost'




const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      username
      email
      id
      token
    }
  }
`

 function MutationWithHook(){
    // form hooks imoported from react
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginUser, {data, error, loading}] = useMutation(LOGIN_MUTATION)

    if(error) return console.log('Error')

    if(data) return console.log('Logged In')

    return (
      <form
        id="signform"
        className="text-center p-4"
        onSubmit={e => {
          e.preventDefault()
          debugger
          loginUser({ variable: { email, password } });
        }}
      >
        <p className="h4 mb-4 f-1">Sign In</p>

        <input
          title="Email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          title="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <div className="form-group my-4">
          <button className="btn btn-block" type="submit">
            Sign In
          </button>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
      </form>
    )
}

export default MutationWithHook