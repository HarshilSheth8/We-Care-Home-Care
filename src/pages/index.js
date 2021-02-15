import React, {useState} from 'react'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/Index'
import Navbar from '../components/Nav'
import CardList from '../components/service-cardlist/service-cardlist.componet'
// import CardList from '../components/service-cardlist'
import Sidebar from '../components/sidebar'
import VideoSection from '../components/VideoSection'



const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <VideoSection />
            <CardList />
            {/* <Service /> */}
            {/* <Services /> */}
            <InfoSection {...homeObjOne}/>  
            <InfoSection {...homeObjTwo}/>  
            <InfoSection {...homeObjThree}/>  
        </>
    )
}

export default Home
