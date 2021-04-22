
module.exports = {
    pullEntry: async (req, res) => {
    //if users session is active, get all users entries. Compare user id off the session.
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.sendStatus(403);
    }
    },

    updateEntry: (req, res) => {
    //if users session is active, (Compare user id off the session)
    //take the req and update the database by the corrisponding pase of the moon.
    //post timestamp at the bottom of the post.
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.sendStatus(403);
    }
    },

    deleteEntry: (req, res) => {
    //if users session is active, (Compare user id off the session)
    //set moon phase to null
    //post timestamp at the bottom of the post.
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.sendStatus(403);
    }
    }
}