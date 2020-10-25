import React, {useState, useContext} from 'react'
import {Paper, Typography, InputBase, Button, IconButton} from '@material-ui/core'
import {makeStyles, fade} from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'
import StoreAPI from '../storeAPI'

const useStyle = makeStyles((theme) =>({
      card :{
        width : '280px',
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0,1,1,1),
      },
      input : {
        margin: theme.spacing(1),
      },
      btnAdd:{
        backgroundColor: '#7357b9',
        color:'#fff',
        "&:hover":{
          backgroundColor: fade('#7357b9', 0.25)
        }
      },
      add:{
        margin: theme.spacing(0,1,1,1),
      }
}))


export default function InputCard({setOpen, listId, type}) {
  const classes = useStyle();
  const [title, setTitle] = useState('')
  const {addMoreCard, addMoreList} = useContext(StoreAPI)

  const handleOnChange = (e)=>{
    setTitle(e.target.value);
  }
  const handleOnAdd = ()=>{
    if (type==='card'){
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    }
    else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    }

  }
  const handleBlur =()=>{
    setOpen(false);
    setTitle('');
  }
  return(
    <div>
        <div>
        <Paper  className ={classes.card}>
          <InputBase
            onChange={handleOnChange}
             autoFocus multiine fullWidth inputProps={{
            className:classes.input,
          }}
          onBlur = {()=>setOpen(false)}
          value={title}
          placeholder={type==='card' ? "Enter a title for this card" : "Enter a title for this list"}/>
        </Paper>
        </div>

      <div className={classes.add}>
          <Button className={classes.btnAdd} onClick={handleOnAdd}>{type === 'card' ? 'Add Card' : 'Add List'}</Button>
        <IconButton onClick={handleBlur}>
          <ClearIcon/>
          </IconButton>
      </div>
    </div>
  )
}
