import React, { useState,useRef,useEffect } from 'react'
import "./ProjectNavigation.css"
// import { GrIndicator } from 'react-icons/gr';

import Aos from 'aos';
const ProjectNavigation = ({tabs,onChange,}) => {
    const [activeIndex,setActiveIndex] = useState(0);
    const itemsEls = useRef(new Array());
    const [offset,setOffset] = useState(0);
    const [indecatorWidth,setIndecatorWidth] = useState(0);
    const sumArray = (arr) =>{
        let sum = 0;
        for (let i = 0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    }
    useEffect(()=>{
        Aos.refreshHard();
        const prevEl= itemsEls.current.filter((_,index)=>index<activeIndex);
        setOffset(
            sumArray(prevEl.map(item=>item.offsetWidth))
        )
        setIndecatorWidth(itemsEls.current[activeIndex].offsetWidth)
    },[activeIndex])
  return (
    <div className='project-navigation'>
        {
            tabs.map((tab,index)=>(
                <button ref={(el)=>itemsEls.current[index]=el}
                onClick={()=>{
                    setActiveIndex(index);
                    onChange(tab)
                    Aos.refreshHard()
                }}
                key={index}
                >
                    {tab}
                </button>
            ))
        }
        <span className="indicator"
        style={{
            left:`${offset}px`,
            width:`${indecatorWidth}px`
        }}
        />
        
    </div>
  )
}

export default ProjectNavigation