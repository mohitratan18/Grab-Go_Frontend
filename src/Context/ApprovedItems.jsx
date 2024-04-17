/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Newcontext from './ApprovedContext'
const ApprovedItems = (props) => {
    const [Data, setData] = useState([]);
    const update = (data)=>{
        setData(data);
        console.log("data set hogaya");
    }
  return (
    <Newcontext.Provider value={{Data,update}}>
        {props.children}
    </Newcontext.Provider>
  )
}

export default ApprovedItems
