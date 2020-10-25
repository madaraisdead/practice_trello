import React , {useState, useEffect} from 'react'
import {Drawer, Grow, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import colors from '../Color'
import {getImages} from '../ImageAPI'

const useStyle = makeStyles((theme)=>({
  drawer:{
    width:'400px',
  },
  menu:{
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
  },
  box:{
     height:'90px',
     width:'45%',
     borderRadius: '9px',
     marginBottom : theme.spacing(2),
  },
  colorContainer:{
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'space-around',

  },
}))
export default function SideMenu({openSide, setOpenSide, setnewBG}){
const classes = useStyle()
const [openColor, setOpenColor] = useState()
const [openImage, setOpenImage] = useState()
const [images,setImages] = useState([])

const getListOfImages = async ()=>{
  const listOfImages = await  getImages()
  setImages(listOfImages)
}
useEffect(()=>{
  getListOfImages()
}, [])
  return (
    <div>
      <Drawer open={openSide} anchor='right' onClose={()=>setOpenSide(false)}>
      <div className={classes.drawer}>
        <div className={classes.menu}>
          <div className={classes.box}
          style={{
            backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/044_le_pic_du_ger.jpg/1200px-044_le_pic_du_ger.jpg)',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
          }} onClick={()=>setOpenImage(true)}></div>
          <div className={classes.box}
          style={{
            backgroundImage:'url(https://vivaldi.com/wp-content/uploads/colors-1024x656.png)',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
          }} onClick={()=>{setOpenColor(true)
                          setOpenImage(false)
          }} >
          </div>
        </div>
        {openImage ?
          <Grow in={openImage}>
        <div className={classes.colorContainer}>{images.map((image, index)=>{
          return (
            <div className={classes.box}
            key ={index}
            style={{
              backgroundImage:`url(${image.thumb})`,
              backgroundRepeat : 'no-repeat',
              backgroundSize : 'cover',
            }}
              onClick = {()=>setnewBG(image.full)}
            ></div>
          )
        })}</div>
        </Grow> : <Grow in={openColor}>
        <div className={classes.colorContainer}>{colors.map((color, index)=>{
          return (
            <div className={classes.box}
            key ={index}
            style={{
              backgroundColor: color,
            }}
            onClick = {()=>setnewBG(color)}></div>
          )
        })}</div>
        </Grow>}


      </div>
      </Drawer>
    </div>
  )
}
