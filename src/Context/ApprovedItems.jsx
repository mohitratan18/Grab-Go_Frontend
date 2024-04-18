/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Newcontext from './ApprovedContext'
const ApprovedItems = (props) => {
    const [Data, setData] = useState([]);
    const [Unapproved, setUnapproved] = useState([]);
  return (
    <Newcontext.Provider value={{Data,setData,Unapproved,setUnapproved}}>
        {props.children}
    </Newcontext.Provider>
  )
}

export default ApprovedItems
