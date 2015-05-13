var num = prompt("Play Ping-Pong", "Enter a number");

num = parseInt(num);

for (var i=1; i <= num; i++){
   
    if( i % 3 && i % 5 ) {
        document.write(i);

    } else {
    	
        if( i % 3 === 0 ) {
            document.write("ping");
        }
        if( i % 5 === 0 ) {
            document.write("pong");
        }
    }
    document.write('<br>');
}
