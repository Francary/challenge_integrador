import session from "cookie-session"

const authSession = () =>{
   return session({
        secret: "user_secret"
    })
} 

export {
    authSession,
}
