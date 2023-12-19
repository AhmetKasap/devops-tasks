
const authorizedIp = '95.15.1.1'

const adminAuthorized = (req,res,next) => {
    const realIP = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Gelen istek için gerçek IP adresi: ${realIP}`);
    if(authorizedIp === realIP) {
        next()
    }
    else{
        console.log("istek başarısız")
    }
}

module.exports = adminAuthorized