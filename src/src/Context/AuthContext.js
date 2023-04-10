import React, { createContext, useContext, useReducer } from "react";

const AuthStateContext = React.createContext();
const AuthDispachContext = React.createContext();

export function useAuthState() {
  const context = useContext(AuthStateContext);

  if (!context) throw Error("AuthStateContext must use the AuthProvider");

  return context;
}

export function useAuthDispach() {
  const context = useContext(AuthDispachContext);

  if (!context) throw Error("AuthDispachContext must use the AuthProvider");

  return context;
}

export function AuthProvider({ children }) {
  const [state, dispach] = useReducer();
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispachContext.Provider value={dispach}>
        {children}
      </AuthDispachContext.Provider>
    </AuthStateContext.Provider>
  );
}
