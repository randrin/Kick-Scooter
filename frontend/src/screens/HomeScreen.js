import React, { useEffect } from "react";
import ArrivalScreen from "./inc/ArrivalScreen";
import BannerScreen from "./inc/BannerScreen";
import BlogScreen from "./inc/BlogScreen";
import CategoriesTypeScreen from "./inc/CategoriesTypeScreen";
import HeaderScreen from "./inc/HeaderScreen";
import NewsLettersScreen from "./inc/NewsLettersScreen";
import ServicesScreen from "./inc/ServicesScreen";
import TopProductsScreen from "./inc/TopProductsScreen";

const HomeScreen = () => {

    useEffect(() => {
        // window.location.reload(true);
    }, [])
  return (
    <main>
      <HeaderScreen />
      <BannerScreen />
      <ServicesScreen />
      <ArrivalScreen />
      <CategoriesTypeScreen />
      <TopProductsScreen />
      <BlogScreen />
      <NewsLettersScreen />
    </main>
  );
};

export default HomeScreen;
