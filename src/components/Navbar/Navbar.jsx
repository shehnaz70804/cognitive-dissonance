import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { user, signInWithGoogle, logout } = useContext(AuthContext);

    return (
        <nav>
            <h1>NeuroHarmony</h1>
            {user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={signInWithGoogle}>Login with Google</button>
            )}
        </nav>
    );
};

export default Navbar;
