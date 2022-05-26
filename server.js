const express = require("express")
const app = express()

const PORT = process.env.PORT || 8081

app.use(express.static(__dirname + '/dist/smart-service'))

app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/dist/smart-service/index.html')
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})