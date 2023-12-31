import Brands from '@/components/Brands'
import CategoriesMen from '@/components/CategoriesMen'
import CategoriesWomen from '@/components/CategoriesWomen'
import EverydayFashion from '@/components/EverydayFashion'
import Feedback from '@/components/Feedback'
import Hero from '@/components/Hero'
import LimeLight from '@/components/LimeLight'
import NewArrival from '@/components/NewArrival'
import SavingZone from '@/components/SavingZone'
import TwoCollections from '@/components/TwoCollections'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <TwoCollections/>
      <NewArrival/>
      <SavingZone/>
      <EverydayFashion/>
      <CategoriesMen/>
      <CategoriesWomen/>
      <Brands/>
      <LimeLight/>
      <Feedback/>
    </div>
  )
}

export default Home