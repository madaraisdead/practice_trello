import React, {useState} from 'react'
import Wrapper from './components/Wrapper'
import {makeStyles} from '@material-ui/core/styles'
import Navigation from './components/Navigation'

const useStyle = makeStyles((theme) =>({

}))

export default function App(){
  const classes = useStyle()
  const [backgroundImage, setBackgroundImage] = useState('#834bff')
  return(
    <div className={classes.root}
      style={{
        backgroundColor : backgroundImage,
        backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
      }}>
      <Navigation setBackgroundImage= {setBackgroundImage}/>
      <Wrapper/>
    </div>
  )
}
