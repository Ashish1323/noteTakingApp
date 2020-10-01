var fs=require("fs")

let JSONdat= fs.readFileSync("loda.json").toString()
const JSONdata= JSON.parse(JSONdat)
JSONdata.name="ashish"
JSONdata.sex="male"
JSONdata.age=20



const stringData= JSON.stringify(JSONdata)

fs.writeFileSync("loda.json",stringData)