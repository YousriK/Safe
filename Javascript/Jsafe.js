var header = document.querySelector("#siteWrapper header");

function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);



        var image=["Objet/image2.jpeg","Objet/image3.jpeg","Objet/image4.jpeg","Objet/image1.jpg"];
        var i = 0;
        setInterval(function(){
            $('#GrandeIntro').css("background-image","url("+image[i]+")");
            i++;
            if(i==4) i=0;
        },5000);



