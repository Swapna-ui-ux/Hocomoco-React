import Head from 'next/head'
import Image from 'next/image' 
import Banner from '../components/Banner'
import Clients from '../components/Home/Clients'
import Counter from '../components/Home/Counter'
import Emonitoring from '../components/Home/Emonitoring'
import Homeblog from '../components/Home/Homeblog'
import Homeportfolio from '../components/Home/Homeportfolio'
import Howitworks from '../components/Home/Howitworks'
import Services from '../components/Home/Services'
import Whychooseus from '../components/Home/Whychooseus'

export default function Home() {
  return (
   <>
   <Banner></Banner>
   <Services></Services>
   <Counter></Counter>
   <Homeportfolio></Homeportfolio>
   <Howitworks></Howitworks>
   <Whychooseus></Whychooseus>
   <Emonitoring></Emonitoring>
   <Homeblog></Homeblog>
   <Clients></Clients>
   </>
  )
}
