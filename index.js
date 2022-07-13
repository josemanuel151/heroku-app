let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-01-10T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-01-10T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-01-10T19:20:14.298Z",
    important: true
  }
]

const express=require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.get('/api/notes', (req, res)=>{
  res.json(notes)
})

app.get('/', (request, response) => {
  response.send('<h1>Hola Mundo!</h1>')
})

app.get('/api/notes/:id', (request, response) => {  
  const id  = Number(request.params.id)
  const note = notes.find(item=>item.id===id)
  if(note){
    response.json(note)    
  }else{
    response.status(404).send('<h1>Lo siento bb :/ 404</h1>')
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})


app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)

  response.json(note)
})
app.put('/api/notes/:id', (req, res)=>{
 const id = req.params.id
 const body = req.body
 const nObj = {

 }
 console.log(body);
})

app.listen(PORT, ()=>console.log(`${PORT}`))
