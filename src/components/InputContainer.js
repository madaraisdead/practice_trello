import React, {useState} from 'react'
import {Paper, Typography, Collapse} from '@material-ui/core'
import {makeStyles, fade} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
import InputCard from './InputCard'

const useStyle = makeStyles((theme) =>({
  addCard:{
      padding: theme.spacing(1,1,1,2),
      margin: theme.spacing(0,1,1,1),
      display : 'flex',
      backgroundColor: '#EBECF0',
      "&:hover":{
        backgroundColor: fade('#000', 0.25),
      },
  },
  root:{
    marginTop:theme.spacing(1),
    width: '300px',
  },
}))

export default function InputContainer({listId, type}){
    const classes = useStyle();
    const [open,setOpen] = useState(false);
  return(
    <div className={classes.root}>
    <Collapse in={open}>
    <InputCard setOpen={setOpen} listId={listId} type ={type}/>
    </Collapse>
    <Collapse in={!open}>
    <Paper className={classes.addCard} elevation={0} onClick={()=>setOpen(!open)}>
    <AddIcon/>
  <Typography>{type==='card' ? "Add a Card" : "Add a List"}</Typography>
    </Paper>
      </Collapse>
    </div>
  )
}
