import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


export const LogoutButton = () => {
     const { logout } = useAuth0();

  return (
    <div>
      <button className="btn btn-push" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}
