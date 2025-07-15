import React from 'react';
import Header from '../Components/Header/Header';
import Brands from '../Components/Brands/Brands';
import FeatureBook from '../Components/FeaturesBooks/FeaturesBooks';
import BestSellingBook from '../Components/BestSellingBook/BestSellingBook';
import PopularBook from '../Components/PopularBooks/PopularBooks';
import Quote from '../Components/Quotes/Quotes';
import LatestArticle from '../Components/LatestArticle/LatestArticle';



export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <FeatureBook />
      <BestSellingBook />
      <PopularBook />
     <Quote />
     <LatestArticle />
 
    </>
  );
}
