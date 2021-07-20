import { useState } from "react";
import { createContainer } from "unstated-next";

function AuthProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  return {
    isLoggedIn,
    setIsLoggedIn,
    setIsAdmin,
    isAdmin,
  };
}

let AuthJelly = createContainer(AuthProvider);

export default AuthJelly;
