var header = document.querySelector("#siteWrapper header");

function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);



        var image=["Objet/image2.jpg","Objet/image3.jpg","Objet/image4.jpg","Objet/image1.jpg"];
        var i = 0;
        setInterval(function(){
            $('#GrandeIntro').css("background-image","url("+image[i]+")");
            i++;
            if(i==4) i=0;
        },3000);



$(function(){
	$('#Competences').hide();
	$('.white').click(function(){
		$('#Accueil').hide();
		$('#Competences').show();
	});
});