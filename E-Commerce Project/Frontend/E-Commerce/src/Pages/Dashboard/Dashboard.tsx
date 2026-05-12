import { useNavigate } from "react-router";


export default function Dashboard() {
    const naviagate = useNavigate();
    return (
        <div>
            <h1 className="text-center text-4xl ">Admin Dashboard</h1>

            <button onClick={() => {
                localStorage.removeItem('authAdminToken');
                naviagate('/login');
            }}>LogOut</button>
        </div>
    )
}
