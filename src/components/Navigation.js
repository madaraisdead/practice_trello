import React , {useState} from 'react'
import {} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Top from './Top'
import SideMenu from './SideMenu'

export default function Navigation({setBackgroundImage}){
 const [openSide, setOpenSide]=useState(false)
  return (
    <div>
      <Top setOpenSide={setOpenSide}/>
      <SideMenu openSide={openSide}
      setOpenSide={setOpenSide}
      setnewBG = {setBackgroundImage}/>
    </div>
  )
}
