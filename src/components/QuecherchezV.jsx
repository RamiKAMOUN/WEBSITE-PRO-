import React, { useState,useEffect } from 'react'
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import QueCherzService from '../Services/QuecherzVService';

const QuecherchezV = ({title,desc}) => {
  const [queCherzVs, setQueCherzVs] = useState([]);
 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await QueCherzService.getAllQueCherzVs();
        console.log('Fetched data:', data); 
        setQueCherzVs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const handleToggleDescription = (id) => {
    setQueCherzVs((prevQueCherzVs) =>
      prevQueCherzVs.map((QCV) => ({
        ...QCV,
        isDescShowing: QCV.id === id ? !QCV.isDescShowing : QCV.isDescShowing,
      }))
    );
  };

  return (
    <div>
      {queCherzVs.map((queCherzV) => (
        <article className='faq'  key={queCherzV.id} onClick={() => handleToggleDescription(queCherzV.id)}>
          <div>
            <h4>{queCherzV.title}</h4>
            <button className='faq__icon'>{queCherzV.isDescShowing ? <IoMdRemoveCircle /> : <IoMdAddCircle />}</button>
          </div>
          {queCherzV.isDescShowing && <p>{queCherzV.desc}</p>}
        </article>
      ))}
    </div>
  );
};

export default QuecherchezV
