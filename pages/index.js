import firebase from "./../firebase"

import Brand from "../components/brand"
import NavBar from "../components/navbar"



function Home() {
  console.log(firebase)
  return (
    <>
      <NavBar/>
       <Brand tagline="login options" title="home page"/>
    </>
  )
}

export default Home
