//Dependencies
const Secure_RM = require("secure-rm")
const I2rys = require("./utils/i2rys")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(Self_Args.length == 0){
    console.log(`node index.js <directory>
Example: node index.js ./test`)
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    I2rys.log("yellowish", "CRITICAL", "SRF Debugger:", "Invalid directory path.")
    I2rys.log("yellowish", "INFO", "SRF Debugger:", "Exiting...")
    process.exit()
}

Secure_RM(`${Self_Args[0]}/*`).then(()=>{
    I2rys.log("yellowish", "INFO", "SRF Debugger:", `${Self_Args[0]} files have been deleted permanently, securely & safely.`)
    I2rys.log("yellowish", "INFO", "SRF Debugger:", "Exiting...")
    process.exit()
}).catch(()=>{
    I2rys.log("yellowish", "CRITICAL", "SRF Debugger:", `Unable to remove ${Self_Args[0]} files due to invalid path/low permission.`)
    I2rys.log("yellowish", "INFO", "SRF Debugger:", "Exiting...")
    process.exit()
})
