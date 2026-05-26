const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createNote = async (req, res) => {
  try {
    // json anotacao{ "titulo": "Aula Prisma",
    //  "conteudos":
    //  [ { "texto": "Introdução ao Prisma", "ordem": 1 },
    //  { "texto": "Como funciona relation", "ordem": 2 } ] }

    const anotacao = req.body;
    const userId = 1;

    const newNote = await prisma.anotacao.create({
      data: {
        titulo: anotacao.titulo,

        usuario: {
          connect: {
            id: userId,
          },
        },
        conteudos: {
          create: anotacao.conteudos.map((conteudo) => ({
            texto: conteudo.texto,
            ordem: conteudo.ordem,
          })),
        },
      },
      include: {
        conteudos: true,
      },
    });

    return res
      .status(201)
      .json({ message: "Nota criada com sucesso!", note: newNote });

    console.log("Nova anotação criada:", newNote);
  } catch (error) {
    console.error(error, "Erro ao criar nota");
    return res.status(500).json({ message: "Erro ao criar nota" });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const userId = 1;
    const notes = await prisma.anotacao.findMany({
      where: {
        usuarioId: userId,
      },
      include: {
        conteudos: true,
      },
    });

    return res.status(200).json({ notes });
  } catch (error) {

    console.error(error, "Erro ao buscar notas");
    return res.status(500).json({ message: "Erro ao buscar notas" });
  } finally {
    await prisma.$disconnect();
  }   
};