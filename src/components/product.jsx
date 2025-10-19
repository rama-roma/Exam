import React, { useState } from 'react'
import img from '../assets/Group 48096434.svg'
import img1 from '../assets/Layer 2 1.svg'
import img2 from '../assets/Group 48096431.svg'
import img3 from '../assets/Layer 6 1.svg'
import img4 from '../assets/Group 48096432.svg'
import img5 from '../assets/Layer 3 1.svg'
import img6 from '../assets/Frame 48096552.svg'
import img7 from '../assets/Group 48096433.svg'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

export default function Product() {
  const [user, setUser] = useState([
    { id: 1, avatar: img, name: "John Doe", text: "Выбирать прибыльные предложения", status: "active" },
    { id: 2, avatar: img1, name: "Smith Doe", text: "Создавать яркие креативы", status: "active" },
    { id: 3, avatar: img2, name: "Alice Doe", text: "Настраивать техническую часть", status: "active" },
    { id: 4, avatar: img3, name: "Soe Doe", text: "Запускать рекламные компании", status: "active" },
    { id: 5, avatar: img4, name: "Doe Doe", text: "Использовать все необходимые инструменты", status: "inactive" },
    { id: 6, avatar: img5, name: "Kurbon Doe", text: "Продавать товары и услуги по всему миру", status: "inactive" },
    { id: 7, avatar: img6, name: "Rama Doe", text: "Анализировать данные и принимать правильные решения", status: "inactive" },
    { id: 8, avatar: img7, name: "Ismail Doe", text: "Зарабатывать в долларах, евро и криптовалютах", status: "inactive" },
  ])

  const [status, setStatus] = useState('')
  const [editOpen, setEditOpen] = useState(false)
  const [editImage, setEditImage] = useState("")
  const [editName, setEditName] = useState("")
  const [editText, setEditText] = useState("")
  const [editStatus, setEditStatus] = useState('')
  const [editId, setEditId] = useState(null)

  const [search, setSearch] = useState('');

  const [open, setOpen] = useState(false)
  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newText, setNewText] = useState('')
  const [newStatus, setNewStatus] = useState('')

  const handleChange = (event) => setStatus(event.target.value)

  const deleteUser = (id) => {
    setUser(user.filter((e) => e.id !== id))
  }

  const editUser = () => {
    setUser(user.map((e) => {
      if (e.id === editId) {
        return { ...e, name: editName, avatar: editImage, text: editText, status: editStatus }
      }
      return e
    }))
    setEditOpen(false)
    setEditName('')
    setEditText('')
    setEditImage('')
    setEditStatus('')
  }

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: newName,
      avatar: newImage,
      text: newText,
      status: newStatus
    }
    setUser([...user, newUser])
    setOpen(false)
    setNewName('')
    setNewText('')
    setNewImage('')
    setNewStatus('')
  }

  return (
    <>
      <div className='flex justify-center items-center gap-[30px]'>
        <Button variant='contained' onClick={() => setOpen(true)}>Add card</Button>

        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="status"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>

      <TextField
          label="Search by name"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className='flex flex-wrap items-center justify-center gap-[20px] mt-[30px]'>
        {user.filter((e) => (!status || e.status === status) && e.name.toLowerCase().includes(search.toLowerCase())).map((e) => (
            <div key={e.id} className='rounded-[30px] bg-[#644AC0] p-[10px] w-83 h-83 flex flex-col items-center justify-center'>
              <img className='w-30' src={e.avatar} alt="" />
              <h1 className='text-[white] text-[30px]'>{e.name}</h1>
              <p className='text-[white] text-center'>{e.text}</p>
              <p className="text-gray-300 capitalize">{e.status}</p>
              <div className='flex items-center gap-[20px] p-4'>
                <Button
                  variant="contained"
                  onClick={() => {
                    setEditOpen(true)
                    setEditId(e.id)
                    setEditName(e.name)
                    setEditText(e.text)
                    setEditImage(e.avatar)
                    setEditStatus(e.status)
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => deleteUser(e.id)} variant="contained">
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </section>


      <Dialog open={editOpen}>
        <DialogTitle>Edit Card</DialogTitle>
        <DialogContent className="flex flex-col items-center gap-[20px]">
          <TextField label="Name" variant="filled" value={editName} onChange={(e) => setEditName(e.target.value)} />
          <TextField label="Image" variant="filled" value={editImage} onChange={(e) => setEditImage(e.target.value)} />
          <TextField label="Text" variant="filled" value={editText} onChange={(e) => setEditText(e.target.value)} />
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={editStatus}
              label="Status"
              onChange={(e) => setEditStatus(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setEditOpen(false)}>Close</Button>
          <Button variant="contained" onClick={editUser}>Save</Button>
        </DialogActions>
      </Dialog>

  
      <Dialog open={open}>
        <DialogTitle>Add Card</DialogTitle>
        <DialogContent className="flex flex-col items-center gap-[20px]">
          <TextField label="Name" variant="filled" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <TextField label="Image" variant="filled" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
          <TextField label="Text" variant="filled" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={newStatus}
              label="Status"
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>Close</Button>
          <Button variant="contained" onClick={addUser}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
