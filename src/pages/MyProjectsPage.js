import ProtectedRoute from '../components/HOC/ProtectedRoute'
import MyProjects from '../components/MyProjects/MyProjects'
import Navbar from '../components/Navbar/Navbar'

function MyProjectsPage() {
  return (
    <div>
      <Navbar/>
      <MyProjects/>
    </div>
  )
}

export default ProtectedRoute(MyProjectsPage);