import express, { response } from "express";


const app = express();

app.get("/test", (req, res) => {
	return res.send("Olá método GET");
});

app.post("/test-post", (req, res) => {
	return res.send("Olá método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Sever is running"));