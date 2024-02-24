import express from 'express'
const app = express()
app.use(express.json())
app.post('/sum', async (req, res) => {
  try {
    const { a, b } = req.body
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number') {
      res.sendStatus(400)
      return
    }
    res.send({ result: a+b })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})
export default app