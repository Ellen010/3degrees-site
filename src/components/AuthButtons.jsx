import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div className="flex gap-4">
            {!isAuthenticated && (
                <button
                    onClick={() => loginWithRedirect()}
                    className="bg-[#095790] text-white px-4 py-2 rounded"
                >
                    Login / Sign Up
                </button>
            )}
            {isAuthenticated && (
                <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            )}
        </div>
    );
};

export default AuthButtons;

