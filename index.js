import express from 'express';
const app = express();
import {data} from './data.js'

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(data)
  res.render('index', {data : data});
})

app.get('/:book', (req, res) => {
  // console.log(document)
  res.render('book', { data : data, bookId: req.params.book });
})

app.listen(process.env.PORT||3000);
