import inquirer from "inquirer";
let currencyConvertor = {
    "USD": {
        "USD": 1,
        "EUR": 0.92,
        "PKR": 278
    },
    "EUR": {
        "EUR": 1,
        "USD": 1.08,
        "PKR": 300
    },
    "PKR": {
        "PKR": 1,
        "USD": 0.0036,
        "EUR": 0.0033
    }
};
const answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your currency which you want to convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"]
    },
    {
        name: "to",
        message: "Select which currency you want  to convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount here in number",
        type: "number",
        choices: ["USD", "EUR", "PKR"]
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencyConvertor[from][to] * amount;
    console.log(`your conversion from ${from} to ${to}   is ${result}`);
}
else {
    console.log("invalid operator");
}
