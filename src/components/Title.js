import React, {useState, useContext} from 'react'
import {Typography, InputBase} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import StoreAPI from '../storeAPI'

const useStyle = makeStyles((theme) =>({
  editableTitle:{
      flexGrow: 1,
      fontSize: '1.2rem',
      fontWeight: 'bold',
  },
  editableTitleContainer:{
        margin : theme.spacing(1),
        display: 'flex',

  },
  input:{
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin :theme.spacing(1),
    "&:focus":{
      backgroundColor: '#ddd',
    }
  }
}))

export default function Title({title, listId}){
  const [open, setOpen] = useState(false);
  const [newTitle,setNewTitle] = useState(title);
  const {updateListTitle} = useContext(StoreAPI)
  const classes = useStyle()

  const handleOnChange=(e)=>{
      setNewTitle(e.target.value);
  }
  const handleBlur=()=>{
    updateListTitle(newTitle, listId)
    setOpen(false);

  }
  return(
    <div>
        {open?(
            <div className>
              <InputBase onChange = {handleOnChange}
                 autoFocus
                 value={newTitle}
                 inputProps={{className:classes.input,}}
                 fullWidth
                 onBlur={handleBlur}
              />
            </div>
            ):(
            <div className={classes.editableTitleContainer}>
              <Typography onClick={()=>setOpen(!open)} className={classes.editableTitle}>{newTitle}</Typography>
              <MoreHorizIcon/>
            </div>
              )
          }
    </div>
  );
}
