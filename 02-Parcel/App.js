import React from 'react'
import Navbar,{Navitem} from './components/Navbar';

/**
 * CONTENT OF APP COMPONENT
 */
export default () => {
    return(
        <Navbar title="Mango Airlines"/>
        // <Footer/>
   )
};


export const Welcome = ({...props}) => {
    return <>
          <h1> Hello, {props.name} </h1>
          <h1> {props.title}</h1>
          </>
  }
{/* <Welcome name="session 2127219783" title="jksdjlkds" />,    */}
