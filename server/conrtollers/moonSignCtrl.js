//tested in postman and it is pulling all signs id, name, and meaning.
module.exports = {

    pullSignData: (req, res) => {
        const db = req.app.get('db')

        db.get_moon_sign()
            .then(dbres => {
                res.status(200).send(dbres)
            }).catch(err => console.log(err))

    }
}