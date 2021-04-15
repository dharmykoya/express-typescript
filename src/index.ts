import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <div>
            <h1>Hi there</h1>
        </div>
    `)
})


app.listen(9000, () => {
    console.log('Listening on port 9000')
})