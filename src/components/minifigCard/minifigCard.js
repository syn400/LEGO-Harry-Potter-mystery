import React, { useState } from 'react'

export const MinifigCard = () => {
    const [minifig, setMinifig] = useState();
    const [minifigParts, setMinifigParts] = useState();
    
  return (
    <div className='minifigCard'>
        <h1 className='title'>Your minifig</h1>
        <div>
            <div>
                <section className='minifigPreview'>
                    <img src='https://cdn.rebrickable.com/media/sets/fig-000029/60572.jpg' alt="Minifig preview"/>
                    {/* <img src={minifig.set_img_url} alt="Minifig preview"/> */}
                
                    <h2 className='minifigName'>Harry Potter</h2>
                    {/* <h2>{minifig.name}</h2> */}
                </section>

                <section className='partsSection'>
                    <h2 className='partsTitle'>There are 4 parts in this minifig:</h2>
                    {/* <h2>There are {minifig.num_parts} parts in this minifig:</h2> */}
                    <ul className='partsList'>
                        <li>
                            <img src="https://cdn.rebrickable.com/media/parts/elements/4157659.jpg" alt="" />
                            <div>
                                <h3>Hair Short Tousled</h3>
                                <p>40233</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://cdn.rebrickable.com/media/parts/elements/4596636.jpg" alt="" />
                            <div>
                                <h3>Torso Jacket with Stripe...</h3>
                                <p>973c05h02pr1674</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://cdn.rebrickable.com/media/parts/elements/4222693.jpg" alt="" />
                            <div>
                                <h3>Legs and Hips [Complete...</h3>
                                <p>970c00</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://cdn.rebrickable.com/media/parts/elements/4600280.jpg" alt="" />
                            <div>
                                <h3>Minifig Head Harry Potte...</h3>
                                <p>3626bpr0703</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>

            <div className='btnSection'>
                <button id='drawBtn'>Draw Again</button>
                <p>or</p>
                <button id='orderBtn'>Place an order</button>
            </div>
        </div>

    </div>
  )
}
