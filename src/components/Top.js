import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) =>({
  top:{
    background: 'none',
  },
  title:{
    flexGrow:1,
  },
  btn:{
    color:"#fff",
    backgroundColor: "#4db6ac"
  }
}))

export default function Top({setOpenSide}){
  const classes = useStyle()

  return (
    <div>
        <AppBar position="static" className = {classes.top} elevation={0}>
        <Toolbar>
        <h1 className={classes.title}>Trello</h1>
        <Button className={classes.btn} onClick={()=>setOpenSide(true)}>Change Background</Button>
        </Toolbar>

        </AppBar>
    </div>
  )
}
