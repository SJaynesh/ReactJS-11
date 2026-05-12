import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";


export default function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = false;
    if (isLogin) {
      // Navigate Dashboard
      navigate('/dashboard');
    } else {
      // Navigate Login Page
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  )
}
