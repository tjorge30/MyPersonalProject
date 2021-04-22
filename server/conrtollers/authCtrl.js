const bcrypt = require ('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {name, password, email, tel, admin} = req.body;

        try{
            //check if an exsisting user matches the email tryin to be registerd with. if so, reject.
            const [existingUser] = await db.get_user_by_email(email)

            if (existingUser) {
                return res.status(409).send('user already exsists')
            }

            //hash and salt the password
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const [ newUser ] = await db.register_user(name, hash, email, tel, admin);
            // delete newUser.hash;
            //create a session for the user, using the session info
            req.session.user = newUser;

            //send a response that includes the user session info
            res.status(200).send(req.session.user);

        } catch(err) {
            console.log(err)
            return res.sendStatus(err)
        }
        
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;

        try{

            //check if users exsists, if so do NOT reject request.
            const [ existingUser ] = await db.get_user_by_email(email);
                
            if (!existingUser){
                return res.status(404).send('Incorrect email');
            }
            //compare password from req.body with the stored hash that we just retrieved. if the 
            //passwords do not match reject sign in request.
            const isAuthenticated = bcrypt.compareSync
            (password, existingUser.hash);

            if(!isAuthenticated){
                return res.status(403).send('Incorrect password')
            }
            //set up session and do not incluce hash in session.
            delete existingUser.hash;
            req.session.user = existingUser;
            
            //send the response and session to the front
            res.status(200).send(req.session.user);
        } catch(err){
            console.log(err)
            return res.sendStatus(500)
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        //if storing session on redux may need to clear that out as well
        res.sendStatus(200);
    },

    getSession: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(403);
        }
    }
}