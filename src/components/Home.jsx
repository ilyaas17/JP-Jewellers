import React from 'react';
import '../App.css';
import j1 from '../assets/j1.webp'
import j2 from '../assets/j2.webp'
import jp4 from '../assets/jp4.webp'
import j5 from '../assets/j5.webp'

import ItemMaker from './ItemMaker';

export default function Home() {

    const list = [
        {img : j1, title:"Leafy Radiance Diamond Drop Earrings", desc : "Simple, sublime and beautifully timeless, you can never go wrong with these classic, leaf style drop earrings. It's the perfect choice for gift giving."},
        {img : j2, title:"Timeless Charm Diamond Necklace", desc : "Dip into the timeless elegance of diamonds with this necklace. Whether for everyday use or romantic evenings, you'll always find your match in this piece."},
        {img : jp4, title:"Wondrous Gold Necklace Set for the Punjabi Bride", desc : "Make a statement of unmatched grandeur on your wedding day with this stunning choker set. The antique finish and intricate detailing make this set fit for a queen."},
        {img : j5, title:"A Layered Necklace With a Twist", desc:"Drawn from the world of knitted textures and intricate knots, this dual-layer necklace, featuring a captivating weave pattern, is the ideal complement for your wardrobe. It effortlessly enhances your casual ensembles and adds a touch of style to your off-duty looks!"}
    ]
  return (
    <div className='home-container'>
        <h1 id='home-main-heading'>
            <u>Our Products</u>
        </h1>
        <div className='item-list-container'>
        {list.map((val, index)=> {
            return (
        <ItemMaker key={index} img={val.img} title={val.title} desc={val.desc} />
        )
        })}
        </div>
    </div>
  )
}