const bcrypt = require ('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {first_name, password, email, phone, admin} = req.body;

        try{
            //check if an exsisting user matches the email tryin to be registerd with. if so, reject.
            const [exsistingUser] = await db.get_user_by_email(email)

            if (exsistingUser) {
                return res.status(409).send('user already exsists')
            }

            //hash and salt the password
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const [ newUser ] = await db.register_user(first_name, hash, email, phone, admin);

            //create a session for the user, using the session info
            req.session.user = newUser;

            //send a response that includes the user session info
            req.status(200).send(newUser);

        } catch(err) {
            console.log(err)
            return res.sendStatus(500)
        }
        
    },

    login: (req, res) => {
        const db = req.app('db');
        const {password, email, admin} = req.body;

            //check if users exsists, if so do NOT reject request.
            db.get_user_by_email(email, admin)
                .then(([exsistingUser]) => {
                    if (!exsistingUser){
                        return res.status(403).send('Incorrect email')
                    }
                

                //compare password from req.body with the stored hash that we just retrieved. if the 
                //passwords do not match reject sign in request.
                const isAuthenticated= bycrypt.compareSync
                (password, exsistingUser.hash)

                if(!isAuthenticated){
                    return res.status(403).send('Incorrect password')
                }
                //set up session and do not incluce hash in session.
                delete exsistingUser.hash;
                req.session.user = exsistingUser;
                
                //send the response and session to the front
                res.status(200).send(req.session.user);
            })

    },

    logout: (req, res) => {
        req.session.destroy();
        //if storing sessoin on redux may need to clear that out as well
        res.sendStatus(200);
    }
}