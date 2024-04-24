import styled from "styled-components";
import { useState } from "react";


export default function Head(props) {
    
    return (
        <Container 
        markall = {props.markall} setMarkall = {props.setMarkall}
        count = {props.count} setCount = {props.setCount}>
            <Notification >
                <h1>Notifications</h1>
                <div>{props.count}</div>
            </Notification>
            <p onClick={()=>props.setMarkall(true) & props.setCount(0)}>Mark all as read</p>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 7.4rem;
    margin-bottom: 2.4rem;
    width: 100%;
    

    & p {
        color: #5e6778;
        // როდესაც html-ში font-size: 62.5%-ით გადაგვყავს rem-ში
        //ელემენტს როცა ვუწერ rem-ში  ინსპექტში მიშლის 62,5% 
        //და მგონია რომ არასწორ ზომას წერს
        font-size: 1.4rem;
        font-weight: 500
    }

  /* @media (min-width: 90rem){
        
    } */
`
        
const Notification = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.9rem;
    text-align: left;
    justify-content: space-between;

    & h1 {
    color: #1c202b;
    /* font-size: 2rem; */
    font-weight: 800;
    }

    & div {
        width: 3.2rem;
        height: 2.5rem;
        background-color: #0a327b;
        font-size: 16px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.6rem;
        color: #fff
    }

    


`
 

