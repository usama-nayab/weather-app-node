const http = require('http');
const fs = require('fs');
const requests = require('requests');

const home = fs.readFileSync('home.html' , 'utf-8');

const replaceData = (homePage , data) => {
    let values = homePage.replace("{%City%}" , data.name);
    values = values.replace("{%country%}" , data.sys.country);
    values = values.replace("{%tempVal%}" , data.main.temp);
    values = values.replace("{%tempMin%}" , data.main.temp_min);
    values = values.replace("{%tempMax%}" , data.main.temp_max);
    return values;
}

const server = http.createServer((req , res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url == '/'){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=0907e85ff3b54cc160a56bf164a01586')
        .on('data', (chunk) => {
            let dataObj = JSON.parse(chunk);
            let arrObj = [dataObj];
            const arrObjMap = arrObj.map(val =>  replaceData(home , val)).join("");
            console.log("writing dataaaaaaa");
            res.write(arrObjMap);
            // res.end();

        })
        .on('end', (err) => {
         if (err) return console.log('connection closed due to errors', err);
         console.log("END");
        });
    }
    });

server.listen(8000 , '127.0.0.1' , (err) => {
    if(err){console.log("SERVER ERROR" + err)}
    console.log("SERVER IS RUNNING ON PORT 8000");
})