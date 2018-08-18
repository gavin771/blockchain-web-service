const express = require('express')
const app = express();
var morgan = require('morgan');
app.use(morgan('combined'))
app.use(express.json());

const Blockchain = require('./simpleChain').Blockchain;
let blockchain;

app.get('/block/:height', async (req, res) => {
  const height = parseInt(req.params.height);

  try {
    res.status(200).json(await blockchain.getBlock(height));
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: `Error retrieveing block: ${height}` });
  }
});

app.post('/block', async (req, res) => {
  const data = req.body.body;
  try {
    const block = await blockchain.addBlock({ body: data });
    res.status(200).json(block);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: `Error saving block: ${data}` });
  }
});

app.listen(8000, () => {
  blockchain = new Blockchain();
  console.log('Blockchain service started.');
});
