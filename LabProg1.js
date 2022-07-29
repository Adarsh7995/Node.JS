var http = require('http'); // Import Node.js core module

http.createServer( function (req, res) {
    var url = new URL(req.url, `http://${req.headers.host}`)
    res.writeHead(200, 'ok', {'Content-Type' : 'text/html'})
    console.log(req.method,req.url)
        
        if (req.url == '/'){    
			res.write('<form method="POST" action="Find">')
			res.write('<div style="margin:auto;width:50%;background-color:skyblue">')
			res.write('Enter Number <input type="text" name="number" ><br><br>')
			res.write('<input type="submit" name="submit" value="find">')
			res.write('</div>')
			res.write('</form>')
			res.end()
		}
        else if(req.method == 'GET' && url.pathname =='/Find' ){
        
        var num = url.searchParams.get("number")
        console.log(num)
		var digit, rno=0, num, temp = 0;  
		temp = num;  
        while (num > 0)  
        {  
			digit = num % 10;  
			rno = digit+rno*10;
			num = parseInt( num / 10);  
        }  
        if (rno == temp) 
		{		
			res.write('<div style="margin:auto;width:50%;background-color:skyblue;">')
			res.write(`<h2>Given Number is Palindrome</h2>`)
			res.write('</div>')
		}
		else  
		{
			res.write('<div style="margin:auto;width:50%;background-color:skyblue;">')
			res.write(`<h2>Given Number is Not Palindrome</h2>`)
			res.write('</div>')
		}
		res.end()
	}
	else if(req.method === 'POST' && url.pathname =='/Find' ){
        var body = "";
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            console.log(body)
           var number = new URLSearchParams(body)
		   var num = number.get("number")
        console.log(num)
		var digit, rno=0, num, temp = 0;  
		temp = num;  
        while (num > 0)  
        {  
			digit = num % 10;  
			rno = digit+rno*10;
			num = parseInt( num / 10);  
        }  
        if (rno == temp) 
		{		
			res.write('<div style="margin:auto;width:50%;background-color:skyblue;">')
			res.write(`<h2>Given Number is Palindrome</h2>`)
			res.write('</div>')
		}
		else  
		{
			res.write('<div style="margin:auto;width:50%;background-color:skyblue;">')
			res.write(`<h2>Given Number is Not Palindrome</h2>`)
			res.write('</div>')
		}
		res.end()
        });
    }
	  
}).listen(5000, () => console.log('Server started on port 5000'))