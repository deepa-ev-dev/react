import { useEffect, useState } from "react";
import MENU_DATA from "../components/mockData/resMenu.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   const json = MENU_DATA;
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;