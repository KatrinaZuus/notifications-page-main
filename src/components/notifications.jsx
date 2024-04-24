import styled from "styled-components";
import data from "../data.json"
import { useState } from "react";


export default function Notifications({markall, setMarkall, count, setCount}) {

    const [active, setActive] = useState()
    // const [message, setMessage] = useState()
    
    console.log(count)
    

    
    return (
        <MainContainer>
       {data.map((item, index)=>(

            <ContainerNotification 
            markall = {markall} setMarkall = {setMarkall}
            count = {count} setCount = {setCount}

            key={index}  
            onClick={()=>setActive(index) & setCount(count-1)}
            style = {active+1 == item.id ? {backgroundColor: "#fff"} : {backgroundColor: "none"}}
            
            > 
                <img src={item.userImage} alt="" />
                <div>
                    <AvatarNotification>
                        <AvatarName markall = {markall} setMarkall = {setMarkall}>{item.name} 
                        <span>{item.notify} 
                        <span className="related-Page">{item.relatedPage} 
                        <div className="circle" style = {active+1 !== item.id ? {display: "display-block"} : {display: "none"}}></div></span></span></AvatarName>
                       
                    </AvatarNotification>

                    <p>{item.time}</p>
                    <ContainerMessage markall = {markall} setMarkall = {setMarkall}
                        style = {item.message == "" ? {display: "none"} : {display: "block"} 
                        && active+1 == item.id ? {backgroundColor: "#fff"} : {backgroundColor: "none"}} 
                        >{item.message}
                    </ContainerMessage>
                </div>

                <img  style = {item.relatedPhoto === "" ? {display: "none"} : {display: "block"}} src={item.relatedPhoto} alt="" className="related-Photo"/>
         
            </ContainerNotification>
       ))}
       </MainContainer>

)}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const ContainerNotification = styled.div`
    background-color: ${props=>props.markall ? "#fff" : "#f7fafd"};
    padding: 1.6rem 2.6rem 1.6rem 1.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;

    & img {
        width: 3.9rem;
        height: 3.9rem;
        margin-right: 1.9rem;
    }

    & .related-Photo {
        margin-left: 30%;
    } 
`




const AvatarNotification = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    `

const AvatarName = styled.p `
    font-size: 1.4rem;
    font-weight: 800;
    color: #1c202b;

    & span {
        font-weight: 500;
        color:  #5e6778;
    }
    

    & .related-Page {
        font-weight: bold;
        color: #5e6778;
    }

    & .circle {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #f65552;
        margin-left: 0.8rem;
        display: ${props=>props.markall ? "none" : "inline-block"};
    }

`


const ContainerMessage = styled.div`
    padding: 1.6rem;
    color: #5e6778;
    background-color: ${props=>props.markall ? "#fff" : "#e5effa"};
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 5px;
    border: solid 1px #dde7ee;
    margin-top: 1.2rem; 
    
`


   


  


