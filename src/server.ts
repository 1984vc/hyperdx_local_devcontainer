import express from 'express';

const app = express();
const PORT = 3000;


app.use(express.json());
app.get('/', (req, res) => {
  console.info("Live from hyperdx")
  res.status(200).send("OK")
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
