const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/Mindex");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/Rindex");
app.use("/", indexRouter);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
