import CreateProject from "../components/CreateProject/CreateProject";
import ProtectedRoute from "../components/HOC/ProtectedRoute";
import Navbar from "../components/Navbar/Navbar";

function CreateProjectPage() {
  return (
    <div>
      <Navbar />
      <CreateProject />
    </div>
  );
}

export default ProtectedRoute(CreateProjectPage);
