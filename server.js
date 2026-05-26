// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {

//   // CREATE
//   await prisma.usuario.create({
//     data: {
//       nome: 'Wesley',
//       idade: 19
//     }
//   })

//   // READ
//   const usuarios = await prisma.usuario.findMany()

//   console.log(usuarios)
// }

// main()

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: "https://litenotes-three.vercel.app/"
}));
app.use(express.json());

const userRoutes = require('./src/routers/user');
app.use('/api', userRoutes);

const noteRoutes = require('./src/routers/note');
app.use('/api', noteRoutes);


app.listen(8180,()=>{
  console.log('Servidor rodando na porta 8180');
})