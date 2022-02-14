import { app } from './app';

const port = 3333;

app.get('/', (req, res) => {
  res.json({
    message: "Hello world"
  })
})

app.listen(port, () => console.log(`Server running on port ${port}`));

