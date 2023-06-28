export default function handler(req, res) {
    if (req.method === 'POST') {
        //save to DB
        console.log('POST')
        res.json({message: 'thank you'})
    }
}