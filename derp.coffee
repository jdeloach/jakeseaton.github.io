class API
  opened : false
  open_color : ""
  partitions:  ["#abt", "#media", "#blog"]
  duration:500
  mapper:
    "red":"abt"
    "yellow":"media"
    "blue":"blog"
  debug : -> console.log("debug")
  fade : (element) ->$(element).removeClass("sharp")
  sharpen : (element) -> $(element).addClass("sharp")
  is_open : (color) -> return color.id is this.open_color
  open : (color) ->
    console.log color
    console.log this.opened
    # this.fade(color)
    # if this.opened then this.restore()
    $(".part").hide()
    $("#" + this.mapper[color.id]).show()
    this.open_color = color.id
    this.opened = true
    $("#mobile-space").hide()
    obj = this
    $("#partition").css({"height":"0px"}).animate({"height":"500px"}, obj.duration)
  restore : ->
    obj = this
    $("#partition").animate {
      "height":"0px"
      },obj.duration, ->
        obj.currently_open = ""
        $(".active").removeClass("active").hide()
    $("#mobile space").show()
    this.opened = false
    this.open_color = ""

$(document).ready -> 
  api = new API
  $(".circ").mouseenter -> api.open this unless api.is_open(this)
  $(".circ").click -> api.restore()
  $("body").click -> console.log "Hello "
   # $(".fa-caret-up").click -> api.restore()
  # $("a").mouseenter -> 
  #   i = $(this).find("i")
  #   classes = i.attr("class").split(" ")
  #   bad = classes[1]
  #   api["bad"] = bad
  #   core = bad.split("-")[1]
  #   good = "fa-" + core
  #   api['good'] = good
  #   i.delay(500).removeClass(bad).addClass("fa-"+core)
  # $("a").mouseleave ->
  #   $(this).find("i").delay(500).removeClass(api.good).addClass(api.bad)

   # menuItemNum = $(".menu-item").length;
  # angle = 120
  # distance = 90
  # startingAngle = 180+(angle/2)
  # slice = angle(menuItemNum-1)

  # TweenMax.globalTimeScale(0.8)
  # $(".menu-item").each((i)->
  #   angle = startingAngle+(slice*i)
  #   $(this).css({
  #     transform:"rotate("+(angle)+"deg)"
  #   })
  #   $(this).find(".menu-item-icon").css({
  #     transform:"rotate("+(-angle)+"deg)"
  #   })
  #   )
  # on = false
  # $(".menu-toggle-button").mousedown(()->
  #   TweenMax.to($(".menu-toggle-icon"), 0.1,{
  #     scale:0.65
  #     })
  #   )
