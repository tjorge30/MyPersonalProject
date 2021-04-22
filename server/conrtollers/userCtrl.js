
module.exports = {
    pullUserData: async (req, res) => {
       //if users session is active, get all users data. Compare user id off the session. 
       
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(403);
        }
    
    },

    updateUserData: (req, res) => {
        //if users session is active, (Compare user id off the session)
        //
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(403);
        }
    }
    
}