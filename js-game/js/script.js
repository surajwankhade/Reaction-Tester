	var clickedTime;
	var createdTime = Date.now(); 
	var responseTime;
        
        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        function makeBox(){
        var time = Math.random();
        if  (time > 0.5){
            //alert(time);
            document.getElementById("box").style.borderRadius = "25px";
        }  
        else{
            document.getElementById("box").style.borderRadius ="0px";
        }    
        var top=Math.random();
        top=top*500;
		var left=Math.random();
        left=left*500;
        document.getElementById("box").style.top=top+"px";
        document.getElementById("box").style.left=left+"px";
        time = time * 4000;
         
        setTimeout(function(){
        
        document.getElementById("box").style.backgroundColor = getRandomColor();    
        document.getElementById("box").style.display = "block";
        createdTime = Date.now();    
        
           
    },time)
        
    }
    makeBox();
        
    document.getElementById("box").onclick = function(){
        clickedTime = Date.now();
        
        this.style.display="none";
        
        responseTime = (clickedTime-createdTime)/1000;
		//alert("clicked"+clickedTime+"created"+createdTime);
        document.getElementById("one").innerHTML = responseTime;
        makeBox();
    };  
       
        