import express from "express";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => console.log(`express server running on port ${port}...`));

class Item {
    constructor(public name: string, public quantity: number) { }

    getItemName(): string {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }
}

const groceryItems: Item[] = [];

app.get("/",
    (req, res, next) => {
        console.log("Before handling request");
        next();
    },
    (req, res, next) => {
        res.send(req.body);
        next();
    },
    (req, res) => {
        console.log(req.baseUrl);
    }
);

app.post("/", (req, res) => {
    groceryItems.push(req.body);
    res.sendStatus(201);
})