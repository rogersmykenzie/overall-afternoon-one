module.exports = {
    addSong: (req, res) => {
        const {title, album, artist} = req.body; //We get title, album, and artist off our body
        const db = req.app.get('db'); //Grab that db connection we stored earlier
        db.addSong(title, artist, album).then(results => { //Run the addSong sql statement
            res.status(200).json(results); //We send back a response with a 200 status and all the rows that were selected from the sql statement.
        })
    }
}