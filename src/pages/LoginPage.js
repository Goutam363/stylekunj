import LoginRoute from '../components/HOC/LoginRoute'
import Login from '../components/Login/Login'

function LoginPage() {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default LoginRoute(LoginPage);