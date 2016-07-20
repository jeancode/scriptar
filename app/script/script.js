$(document).ready(function(){


const crypto = require('crypto');
const fs = require('fs');

	 
     $("#file").change(function(){
        const decipher = crypto.createDecipher('aes192', 'jeancode');
		
        const input = fs.createReadStream($(this).val());
        
		const output = fs.createWriteStream("../data.rar");
	
		input.pipe(decipher).pipe(output);
		
		
	 });
	 
	 
	
});