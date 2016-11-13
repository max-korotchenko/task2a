import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/addition', function(req, res) {
	const a = +req.query.a || 0;
	const b = +req.query.b || 0;

	res.send((a + b).toString());
});

const port = 3000;
app.listen(port, function(){
	console.info(`Example app listening on port ${port}!`);
});