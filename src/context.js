import React, { useContext, useState, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("a");
  const [count, setCount] = useState(0);
  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const { drinks } = data;
      setCocktails(drinks);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchCocktails();
  }, [search, fetchCocktails]);
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        count,
        setCount,
        setSearch,
        setLoading,
        fetchCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
