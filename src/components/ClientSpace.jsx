import { useAuth0 } from "@auth0/auth0-react";

const ClientSpace = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <p>Loading...</p>;
    if (!isAuthenticated) return <p>Please log in to access your personal space.</p>;

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
            <p className="mb-2">Email: {user.email}</p>
            <p>User ID: {user.sub}</p>
        </div>
    );
};

export default ClientSpace;

