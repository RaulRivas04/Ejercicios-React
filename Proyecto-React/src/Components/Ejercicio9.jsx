import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Ejercicio9 = () => {
    const [users, setUsers] = useState([]);

    // Función para obtener datos desde la API
    const fetchUsers = async () => {
        try {
            const response = await fetch("https://random-data-api.com/api/users/random_user?size=10");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Cargar usuarios al inicio
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button
                onClick={fetchUsers}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Fetch Random
            </button>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "20px",
                    justifyContent: "center",
                }}
            >
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Ejercicio9;
