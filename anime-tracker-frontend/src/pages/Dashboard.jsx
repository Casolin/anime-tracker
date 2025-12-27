import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../api/auth.api";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutRequest();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>

      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Anime Tracker Dashboard
        </h1>
      </div>
    </div>
  );
};
