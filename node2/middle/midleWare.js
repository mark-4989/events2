

export const localVar = async (req,res,next) =>{
req.app.locals={
    OTP : null,
    resetSession : false
}
next()
}