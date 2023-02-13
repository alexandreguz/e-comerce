import express from 'express';
import cors from 'cors'
import { productsRouter } from './controllers/products-controller.js';


const app = express()
app.use(express.json())
app.use(cors())


// app.use("/api", teamsRouter)
// app.use("/api", meetingsRouter)
app.use("/api", productsRouter)



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3002, () => {console.log("Listening to port 3002")})