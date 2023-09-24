// SuccessContext.js
import React, { createContext, useContext, useState } from "react";

const SuccessContext = createContext();

export function useSuccess() {
	return useContext(SuccessContext);
}

export function SuccessProvider({ children }) {
	const [successMessage, setSuccessMessage] = useState("");

	return (
		<SuccessContext.Provider value={{ successMessage, setSuccessMessage }}>
			{children}
		</SuccessContext.Provider>
	);
}
