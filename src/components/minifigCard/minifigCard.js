import React, { useEffect, useRef, useState } from 'react'
import api from '../../apiVariables';


export const MinifigCard = (props) => {
    const [minifigArr, setMinifigArr] = useState([]);
    const [minifig, setMinifig] = useState(null);
    const [minifigParts, setMinifigParts] = useState(null);
    
    const getResponse = async () => {
        await api.get('/minifigs/?page_size=400&in_theme_id=246').then(res => {
            const minifigRes =  res.data.results[Math.floor(Math.random()*res.data.results.length)]

            setMinifig(minifigRes);
            setMinifigArr(res.data.results)

            api.get("/minifigs/" + minifigRes.set_num + "/parts/").then(res => {
                setMinifigParts(res.data.results);
            })

        });
    }
    const getFigure = async () => {
        const minifigRes =  minifigArr[Math.floor(Math.random()*minifigArr.length)]

        setMinifig(minifigRes);

        await api.get("/minifigs/" + minifigRes.set_num + "/parts/").then(res => {
            setMinifigParts(res.data.results);
        })
    }

    
    const shouldLog = useRef(true)
    
    useEffect(()=>{
        if(shouldLog.current) {
            shouldLog.current = false;
            getResponse();
        }
    },[])

    if(minifig === null & minifigParts === null) {
        return (
            <div className='minifigCard'>
                <h1 className='title'>Your minifig</h1>
                <div className='loading'>
                    <div className="loader"></div>
                    <div className='btnSection'>
                        <button id='drawBtn'>Draw Again</button>
                        <p>or</p>
                        <button id='orderBtn'>Place an order</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
          <div className='minifigCard'>
              <h1 className='title'>Your minifig</h1>
              <div>
                  <div>
                      <section className='minifigPreview'>
                          <img src={minifig.set_img_url !== null ? minifig.set_img_url : 'https://rebrickable.com/static/img/nil_mf.jpg'} alt="Minifig preview"/>
                      
                          <h2 className='minifigName'>{minifig !== '' ? minifig.name : 'loading'}</h2>
                      </section>
      
                      <section className='partsSection'>
                          <h2 className='partsTitle'>There are {minifig !== '' ? minifig.num_parts : null} parts in this minifig:</h2>
       
                          <ul className='partsList'>
                            {minifigParts !== null ? minifigParts.map((e) => {
                                return (
                                    <li key={e.id}>
                                        <img src={e.part.part_img_url} alt="Figure Part" />
                                        <div>
                                            <h3>{e.part.name}</h3>
                                            <p>{e.part.part_num}</p>
                                        </div>
                                    </li>
                            )}) : null}
                          </ul>
                      </section>
                  </div>
      
                  <div className='btnSection'>
                      <button id='drawBtn' onClick={()=> {
                            getFigure()
                        }
                      }>Draw Again</button>
                      <p>or</p>
                      <button id='orderBtn' onClick={()=> {
                      }}>Place an order</button>
                  </div>
              </div>
      
          </div>
        )
    }

}
