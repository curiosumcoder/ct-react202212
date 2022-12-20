import express from 'express'
const app = express()
const port = 8080

// Midlewares
app.get('/', (req, res) => {
  console.log(req)

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})