import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);
    const [singleData,setSingleData] = useState({})

    const handleShowAll = () => {
        setShowAll(true)
    }

    // sorting option
    const handleSort = () => {
        const sortedData = data.sort((a,b)=>{
        return new Date(a.published_in) - new Date(b.published_in)})
        setData([...data,sortedData])
    }
  useEffect(()=>{
    
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res => res.json())
    .then( data => setSingleData(data.data))
  },[uniqueId])
 console.log(data);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            const value = await res.json();
            //console.log(value.data.tools);
            setData(value.data.tools)
        }
        loadData()
    }, [])
    //console.log(data);
    return (
        <>
       <span onClick={handleSort}>
       <Button >Sort by date</Button>
       </span>
            {/* showing the data with the map */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {data.slice(0, showAll ? 12 : 6).map((singleData) => {
                    console.log(singleData);
                    return <SingleData singleData={singleData} key={singleData.id} setUniqueId={setUniqueId} ></SingleData>

                })}
            </div>
            {/* button */}
            {!showAll && (
                <span onClick={handleShowAll}>
                    <Button>See more</Button>
                </span>
            )}
            <Modal singleData={singleData}/>
        </>
    );
};

export default Card;