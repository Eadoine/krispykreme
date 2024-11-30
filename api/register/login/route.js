export async function GET(req, res) {
// Make a note we are on
// the api. This goes to the console.
console.log("in the api page")
// get the values
// that were sent across to us.
const { searchParams } = new URL(req.url)
const email = searchParams.get('email')
const pass = searchParams.get('pass')
console.log(email);
console.log(pass);
// database call goes here


const uri = "mongodb+srv://admin:test@cluster0.b1dl8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// at the end of the process we need to send something back.
return Response.json({ "data":"valid" })
}