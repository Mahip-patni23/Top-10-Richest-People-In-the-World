import React, { useState } from 'react';
import {data} from './data';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Info = () => {
    const [index, setIndex] = useState(0);
    const {name, net_worth, img, text} = data[index];

    const prevPerson = (currentIndex) => {
        if(currentIndex<0){
            setIndex(data.length-1);
        }
        else{
            setIndex(currentIndex);
        }
    }

    const nextPerson = (currentIndex) => {
        if(currentIndex>=data.length){
            setIndex(0);
        }
        else{
            setIndex(currentIndex);
        }
    }

    const random = () => {
        return Math.floor(Math.random()*data.length)
    }
    
    const randomPerson = () => {
        const randomIndex = random();
        setIndex(randomIndex);
    }

    return <article className="container">
        <div className="img-container">
            <img src={img} alt={name} />
        </div>
        <h4 className="author">{name}</h4>
        <p className="net-worth">{net_worth}</p>
        <p className="info">{text}</p>
        <div className="button-container">
            <button className="prev-btn" onClick={() => prevPerson(index-1)}>
                <FaChevronLeft></FaChevronLeft>
            </button>
            <button className="next-btn" onClick={() => nextPerson(index+1)}>
                <FaChevronRight></FaChevronRight>
            </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>surprise me</button>
    </article>
};


export default Info;
