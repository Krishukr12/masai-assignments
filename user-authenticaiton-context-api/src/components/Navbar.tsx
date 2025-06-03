import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

export const Navbar = () => {
  const { user, handleUserLogin, handleUserLogout } =
    useContext(UserAuthContext);

  const handleLogout = () => {
    handleUserLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My App</h1>
      </div>

      <div className="navbar-user">
        {user ? (
          <div className="user-info">
            <span className="greeting">Welcome, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={handleUserLogin}>
            Login
          </button>
        )}
      </div>

      <style>{`
        .navbar {
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-brand h1 {
          font-size: 1.5rem;
          color: #333;
          margin: 0;
        }

        .navbar-user {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .greeting {
          color: #666;
          font-size: 0.9rem;
        }

        .login-btn,
        .logout-btn {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .login-btn {
          background-color: #007bff;
          color: white;
        }

        .login-btn:hover {
          background-color: #0056b3;
        }

        .logout-btn {
          background-color: #dc3545;
          color: white;
        }

        .logout-btn:hover {
          background-color: #c82333;
        }
      `}</style>
    </nav>
  );
};
