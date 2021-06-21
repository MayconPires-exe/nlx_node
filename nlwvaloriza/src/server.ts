import express, { response } from "express";


const app = express();

/**
 * GET   => Buscar uma informação, "qualquer" busca
 * POST  => Inserir (Criar)uma informação
 * PUT   => Alteração ou manipulação de usuario, nome, email, etc
 * DELET => Remover alguma informação
 * PATCH => Alterar uma informação específica. ex:senha
 */


app.get("/test", (req, res) => {
    return res.send("Olá método GET");
});

app.post("/test-post", (req, res) => {
    return res.send("Olá método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Sever is running"));