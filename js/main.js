$(document).ready(function(){
    var urlstr=location.href;
    var urlstatus=false;
    $("#nav a").each(function(){
        if((urlstr+'/').indexOf($(this).attr('href'))>-1 && $(this).attr('href')!='/'){
            $(this).addClass('curument');
            urlstatus=true;
        }else{
            $(this).removeClass('curument');
        }
    });
    if(!urlstatus){
        $("#nav a").eq(0).addClass('curument');
    }

    //the function of backTop button
    $("#backTop").hide();
    $(function(){
       $(window).scroll(function(){
          if($(this).scrollTop()>150){
              $("#backTop").fadeIn();
          }else{
              $("#backTop").fadeOut();
          }
       });
    });
    $("#backTop a").click(function(){
        $("html,body").animate({scrollTop:0},500);//set the speed of backTop
        return false;
    });
});

