import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeModalStatus } from 'features/Slices/ModalSlice';

export default function ModalComponent({text,icon,CustomizeForm}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => dispatch(ChangeModalStatus(true));

  const {Status} = useSelector(state => state.Modal)
  const dispatch = useDispatch()


  const [windowsWidth, setWindowsWidth] = useState()
  const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: windowsWidth < 800 ? '95%' : "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

useEffect(() => {

  const { innerWidth: width, innerHeight: height } = window;
  setWindowsWidth(width)

})

  return (
    <Typography>
      <Button sx={{fontWeight:"bold", color:"#163b60"}} startIcon={icon}  onClick={handleOpen}>{text}</Button>
      <Modal
        open={Status}
        onClose={() => dispatch(ChangeModalStatus(!Status))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <CustomizeForm/>
        </Box>
      </Modal>
    </Typography>
  );
}
