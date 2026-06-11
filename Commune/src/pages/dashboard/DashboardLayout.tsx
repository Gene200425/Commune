import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
    const navigate = useNavigate();

    const admin = JSON.parse(
        localStorage.getItem("admin") || "{}"
    );

    const logout = () => {
        localStorage.removeItem("admin");
        navigate("/login");
    };

    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-99 bg-green-700 text-white p-6 fixed top-0 left-0 h-full">

                <h1 className="text-2xl font-bold mb-2">
                    Administration
                </h1>

                <p className="text-green-100 mb-10">
                    {admin.nom}
                </p>

                <nav className="flex flex-col gap-4">

                    <Link
                        to="/dashboard/actualites"
                        className="p-3 rounded-lg hover:bg-green-800"
                    >
                        📢 Actualités
                    </Link>

                    <Link
                        to="/dashboard/documents"
                        className="p-3 rounded-lg hover:bg-green-800"
                    >
                        📄 Documents
                    </Link>

                    <Link
                        to="/dashboard/messages"
                        className="p-3 rounded-lg hover:bg-green-800"
                    >
                        📬 Messages
                    </Link>

                    <Link
                        to="/dashboard/profil"
                        className="p-3 rounded-lg hover:bg-green-800"
                    >
                        👤 Profil
                    </Link>

                </nav>

                <button
                    onClick={logout}
                    className="mt-10 w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg"
                >
                    Déconnexion
                </button>

            </aside>

    
            {/* Contenu */}
            <main className="flex-1 bg-gray-100 p-8">
                <Outlet />
            </main>

        </div>
    );
};

export default DashboardLayout;