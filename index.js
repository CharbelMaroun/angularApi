// create an express app
const express = require("express")
var bodyParser=require("body-parser");
const cors = require('cors')
const XLSX = require('xlsx')
const app = express()
app.use(cors())
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

var dataPathExcel = 'API.xlsx'


// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get('/menu', function (req, res) {
    
  var wb = XLSX.readFile(dataPathExcel);
  var sheetName = wb.SheetNames[0];
  var sheetValue = wb.Sheets['Sheet1'];
  A = XLSX.utils.sheet_to_json(sheetValue)
  res.send(A)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })