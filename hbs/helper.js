const hbs= require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));

hbs.registerHelper('getProduct', function(){
    var producto=" ";
    obj.forEach(element => {
        producto += '<div class="prodcenter" align="center">';
        producto += '<img src="'+ element.imag+'" alt="PC" align="center" width="320px" height="320px">';
        producto += '<h4 align="center">'+element.producto+'</h4>';
        producto += '<h4 align="center"><strong> '+element.precio+'</strong></h4>';
        producto += '</div>';
    });
    return new hbs.SafeString(producto);
    
});