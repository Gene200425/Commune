import { useState } from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:5000/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        const data = await response.json();
        console.log(data);
        if (data.success) {

            localStorage.setItem(
                "admin",
                JSON.stringify(data.admin)
            );
            
            navigate("/dashboard/actualites");
        } else {
            alert(data.message);
        }
    };

    return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                    <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
                        Administration
                    </h1>

                    <p className="text-center text-gray-500 mb-8">
                        Connectez-vous pour accéder au tableau de bord.
                    </p>

                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >
                        <div>
                            <label className="block mb-2 font-medium">
                                Adresse email
                            </label>

                            <input
                                type="email"
                                placeholder="exemple@email.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Mot de passe
                            </label>

                            <input
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                        >
                            Se connecter
                        </button>
                    </form>
                </div>
            </div>

        </MainLayout>
    );
};

export default Login;