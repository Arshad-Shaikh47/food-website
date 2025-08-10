import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const Summit = createContext(null); // Ensure this is exported

export const SummitProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState({});

  const addToCard = (itemId) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCard = (itemId) => {
    setCardItems((prev) => {
      if (!prev[itemId]) return prev;
      const updated = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updated[itemId] <= 0) delete updated[itemId];
      return updated;
    });
  };

 useEffect(()=>{
  console.log(cardItems);
 },[cardItems])


  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCard,
    removeFromCard,
  };

  return (
    <Summit.Provider value={contextValue}>
      {children}
    </Summit.Provider>
  );
};

export default SummitProvider;