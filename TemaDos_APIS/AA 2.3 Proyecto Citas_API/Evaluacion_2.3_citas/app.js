import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://zenquotes.io/api/random");

        let consejo = result.data[0].q;
        let autor = result.data[0].a;

        res.render("index", {
            consejo,
            autor
        });

    } catch (error) {
        res.render("index", {
            consejo: "No se pudo cargar el consejo",
            autor: "Sistema"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});