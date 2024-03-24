const express =requiere('express');
const app = express();

app.use(express.json());

const estudiantes =[
    {id: 1, name: 'juan', age: 20, enroll: true},
    {id: 2, name: 'selene', age: 25, enroll: false},
    {id: 3, name: 'luz', age: 23, enroll: false},
    {id: 4, name: 'camelia', age: 22, enroll: false},
];

app.get('/',(req,res)=> {
    res.send('Node JS api');
});

app.get('/api/estudiantes',(req,res)=> {
    res.send(estudiante);
});

app.get('/api/estudiantes/:id',(req,res)=>{
    const estudiante =estudiante.find(c =>c.id === parseInt(red.params.id));
    if (!estudiante) return res.status(404).send('estudiante no encontrado');
    else res.send(estudiante)
})

app.post('api/estudiantes',(req,res)=>{
    const estudiante ={
    id: estudiantes.length +1,
    name: req.boby.name,
    age: parseInt(req.boby.age),
    enroll: (req.boby.enroll === 'true')
};

estudiantes.push(estudiante);
res.send(estudiante);
});

app.delete('/api/estudiantes/id',(req,res) =>{
    const estudiante = estudiantes.find(c => c.id === parseInt(req.params.id));
    if  (!estudiante) return res.status(404).send('estudiante no encontrado');

    const index =estudiantes.indexOf(estudiante);
    estudiantes.splice(index, 1);
    res.send(estudiante);
});

const port = process.envport || 80;
app.listen(port, () => console.log('escuchando en el puerto ${port}...'));