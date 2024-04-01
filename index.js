import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/burger", (req, res) => {
    res.send("Special Burger is ready")

});        //api end point

app.get("/pizza", (req, res) => {
    res.json({
        name: "Hukka pizza",
        prize: 130
    })
});

app.get("/pasta", (req, res) => {
    res.json({
        name: "Tomato pasta",
        prize: 100
    })
});

app.get("/order/food", (req, res) => {

    const { menu, price, quantity } = req.query;

    console.log(`Headers:`, req.headers);

    const {user, country} = req.headers;

    const totalPrice = parseInt(quantity) * parseInt(price);

    res.json({

        message: `You have ordered ${quantity} ${menu}`,
        bill: `Your total bill is ${totalPrice}`,

        details: `You are ${user} from ${country}`

    })

});

app.get("/food/:type", (req, res) => {
    const {type} = req.params;

    if(type=="veg"){
        return res.json({
            message: "You have ordered veg food"
        })
    }
    else{
        return res.json({
            message: "You have ordered non-veg food"
        })
    }
});

app.post("/user", (req, res) => {

    const{name, age} = req.body;


    res.json({
        message: `Hello ${name}, are you ${age} years old?`
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

