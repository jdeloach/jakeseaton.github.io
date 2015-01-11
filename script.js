// Javascript for jakeseaton.net
// var dots = document.getElementById('dot');

// url's
var fbURl = "https://www.facebook.com/jake.seaton.92";
var twitterURL = "https://twitter.com/JakeSeaton13";
var linkedinURL = "https://www.linkedin.com/pub/jake-seaton/a7/654/a80";

// dots

var aboutDot = document.getElementById('about-dot');
var mediaDot = document.getElementById('media-dot');
var blogDot = document.getElementById('blog-dot');

// blocks

var aboutBlock = document.getElementById('about-info');
var mediaBlock = document.getElementById('media-info');
var blogBlock = document.getElementById('blog-info');

// content
var aboutText = document.getElementById('about-text');
var blogText = document.getElementById('blog-text');
var Facebook = document.getElementById('facebook');
var Twitter = document.getElementById('twitter');
var Linkedin = document.getElementById('linkedin');


$(document).ready(function(){
  // alert(aboutDot);
  // hide the rectangles
  $(".content-text").hide();
  $(".about-text").hide();
  $(".media-text").hide();
  $(".block").hide();
  // $(".block").attr("hidden", "true");
  $("circle").hover(function(){
    if ($(this).css("opacity")==1){
      $(this).fadeTo("slow",.5);
      /* ,function(){
        // bring the full block
        displayBlock(this.id);*/
      };

    }
  );
  $("circle").mouseleave(function(){
    if($(this).css("opacity")==.5){
      $(this).fadeTo("slow",1);
    }
  });

  $("circle").click(function(){
    $(this).fadeTo("fast", 0, function(){
      displayBlock(this.id);
    });
  });
  $("rect").click(function(){
    if ($(this).css("opacity") == .5)
    {
      restore(this.id);
      $(this).fadeTo("slow",0);
    }
  });

  $(".media-text").click(function(){
    // it it has been revealed
    if ($(this).css("opacity") == 1)
    {
      // go to there
      redirect(this.id);
    }
    // otherwise do nothing
  });

});

// fade the dot
// sharpen the block
// display the text/image

function displayBlock(dot){
  switch(dot) {
  case "about-dot":
    $("#about-info").fadeTo("slow",1);
    $("#about-info").fadeTo("slow",.5);
    $(".about-text").delay(600).fadeTo("slow",1);
    // $(".about-text").fadeTo("slow",1);
    break;
  case "media-dot":
    $("#media-info").fadeTo("slow",1);
    $("#media-info").fadeTo("slow",.5);
    $(".media-text").delay(600).fadeTo("slow",1);
    // $(".media-text").fadeTo("slow", 1);
    break;
  case "blog-dot":
    $("#blog-info").fadeTo("slow",1);
    $("#blog-info").fadeTo("slow",.5);
    $("#blog-text").delay(600).fadeTo("slow",1);
    // $("#blog-text").fadeTo("slow",1);
    break;
  }
}
function fadeBlock(dot){
  switch(dot) {
    case "about-dot":
      $("#about-info").fadeTo("slow",.5);
      $(".about-text").fadeTo("slow",1);
      break;
    case "media-dot":
      $("#media-info").fadeTo("slow",.5);
      $(".media-text").fadeTo("slow", 1);
      break;
    case "blog-dot":
      $("#blog-info").fadeTo("slow",.5);
      $("#blog-text").fadeTo("slow",1);
      break;
  }
}


function restore(block)
{
  switch(block){
    case "about-info":
      $(".about-text").fadeTo("slow",0);
      $("#about-dot").fadeTo("fast",1);
      break;
    case "media-info":
      $(".media-text").fadeTo("slow",0);
      $("#media-dot").fadeTo("fast",1);
      break;
    case "blog-info":
      $("#blog-text").fadeTo("slow",0);
      $("#blog-dot").fadeTo("fast",1);
      break;

  }
}

function redirect(destination)
{
  switch(destination){
    case "facebook":
      $(location).attr("href", fbURL);
      break;
    case "twitter" :
      $(location).attr("href", twitterURL);
      break;
    case "linkedin":
      $(location).attr("href", linkedinURL);
      break;
  }
}
