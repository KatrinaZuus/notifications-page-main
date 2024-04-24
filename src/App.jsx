

import {GlobalStyles } from "./GlobalStyle"
import Head from "./components/head"
import Notifications from "./components/notifications"
import styled from "styled-components";
import { useState } from "react";
import data from "./data.json"




export default function App() {
  

  const [markall, setMarkall] = useState(false)
  const [count, setCount] = useState(data.length)
  return (
    <>
    <GlobalStyles />
    <Cont>
      <Head 
      markall = {markall} setMarkall = {setMarkall}
      count = {count} setCount = {setCount}/>
      <Notifications 
      markall = {markall} setMarkall = {setMarkall}
      count = {count} setCount = {setCount}/>
    </Cont>
    
    </>
  )}



const Cont = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 2.4rem 1.6rem 2.9rem;
  

  @media (min-width: 90rem){
    padding: 3.3rem 3rem 1.8rem;
    border-radius: 1.5rem;
}
`
