// Javascript for jakeseaton.net
var opened = false;
var currently_open = "";
var current = "#"+currently_open;

$(document).ready(function(){
    // circle:hover
    $(".box").hover(
      function(){
        if (opened==false){
          sharpen(this);
          //$(this).fadeTo("fast","1");
        }
      },
      function(){
        if(opened==false){fade(this);}
      }
    );

    // circle :click 
    $(".box").click(function(){

      if ($(this).hasClass("box")){ 
        if (opened == false) {
          expand(this);
        }
        else{
          if (this.id != currently_open){
            restore(); 
          }   
        }
      }
    });

    // up-circle:hover
    $(".up-circle").hover(
      function(){
          sharpen(".up-circle");
      },
      function(){
        fade(".up-circle");
      }
    );


  // up-circle:click--restore
  $(".up-circle").click(function(){
    if (opened == true){
      restore();
    }
    
  });

});
/* FUNCTIONS */ 

// functions for displaying content

function lower_partition(){
      $("#partition").animate({
        height:"+=500px"
      }, 200);
}

function expand(color)
{   
    // fade this circle
    fade_out(color);

    // lower the partition
    lower_partition();
    
    $("#partition").removeClass("invisible");

    switch(color.id){
      case "red":
        $("#abt").removeClass("invisible-abt");
        break;
      case "yellow":
        $("#media").removeClass("invisible-media");
        break;
      case "blue":
        $("#blog").removeClass("invisible-blog");
        break;
    }
    debug();
    //remove the extra space
    $("#mobile-space").addClass("invisible");

    // set opened
    opened = true;
          
    currently_open = color.id;
}

// functions for restoring
function raise_partition(){
  // console.log(currently_open);
  $("#partition").addClass(currently_open);

  $("#partition").animate({
    "height":"-=500px"
  },200, function(){
    
    // get rid of the temporary color
    $("#partition").removeClass(currently_open);

    // this definitely shouldn't be here...but it is.
    currently_open = "";

  });
  
}

function restore(){

  // bring back the boxes
  fade(".box");
  
  // driver roll up the partition please
  raise_partition();
 
  switch(currently_open){
    case "red":
      $("#abt").addClass("invisible-abt");
      break;
    case "yellow":
      $("#media").addClass("invisible-media");
      break;
    case "blue":
      $("#blog").addClass("invisible-blog");
      break;
  }
  // add back the extra space
  $("#mobile space").removeClass("invisible");

  // close
  opened = false;
}

// other
function fade(element){
  $(element).fadeTo("fast",.5);
}
function sharpen(element){
  $(element).fadeTo("fast",1);
}
function fade_out(element){
  $(element).fadeTo("fast",0)
}
function debug(){
  console.log("got to here");
}
