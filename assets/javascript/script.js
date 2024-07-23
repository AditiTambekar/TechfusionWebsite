$(document).ready(function(){


    $.ajax({
      method:"get",
      url:"../../blog/serverWorks/show-data.php",
      success:function(data){
        console.log(data);
      }
    });



    $(".menu").click(function(){
        $(".drawer").css({"left":"0%"});
        $("body").css({"overflow":"hidden"});
    });
    $(".close-drawer").click(function(){
        $(".drawer").css({"left":"100%"});
        $("body").css({"overflow-y":"auto","overflow-x":"hidden"});
    });

    $('.custom-accordion').each(function() {
        const $accordion = $(this);
        const $headers = $accordion.find('strong');
        const $contents = $accordion.find('div');
    
        $headers.click(function() {
          const $this = $(this);
          const $content = $this.next();
    
          if ($content.is(':visible')) {
            $content.slideUp();
          } else {
            $contents.slideUp();
            $content.slideDown();
          }
        });
      });


      $(".hero-form").on("submit",function(event){
        event.preventDefault();
        var username=$("#username").val();
        var email=$("#email").val();
        var contact=$("#cont").val();
        var coursename=$("#crs").val();
        finalVali=4;
        currentVali=0;
        if(username.match(/^[a-zA-Z\s]+$/) && username.length>=3){
          $("#username").css("borderColor","var(--bs-success)");
          currentVali++;
        }else{
          $("#username").css("borderColor","var(--bs-danger)");
        }
        if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && email!=""){
          $("#email").css("borderColor","var(--bs-success)");
          currentVali++;
        }else{
          $("#email").css("borderColor","var(--bs-danger)");
        }
        if(contact.match(/^[6-9]\d{9}$/gi)){
          $("#cont").css("borderColor","var(--bs-success)");
          currentVali++;
        }else{
          $("#cont").css("borderColor","var(--bs-danger)");
        }
        if(coursename.match(/^[a-zA-Z\s]+$/) && coursename.length>=3){
            $("#crs").css("borderColor","var(--bs-success)");
            currentVali++;
        }else{
          $("#crs").css("borderColor","var(--bs-danger)");
        }
        
        if(currentVali===finalVali){
          alert("Thanks! We will call you back within 24hrs");
          $(this).unbind("submit").submit();
          // $("#username").val("");
          // $("#email").val("");
          // $("#cont").val("");
          // $("#crs").val("");
        }else{
          alert("Please fill the valid information");
        }



      });


      $(".percourseform").on("submit",function(){
        event.preventDefault();
        var username=$("#nameuser").val();
        var email=$("#nameemail").val();
        var contact=$("#namephone").val();
        finalVali=3;
        currentVali=0;

        if(username.match(/^[a-zA-Z\s]+$/) && username.length>=3){
          $("#nameuser").css("background","var(--bs-success)");
          currentVali++;
        }else{
          $("#nameuser").css("background","rgba(255,0,0,0.7)");
        }
        if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && email!=""){
          $("#nameemail").css("background","var(--bs-success)");
          currentVali++;
        }else{
          $("#nameemail").css("background","rgba(255,0,0,0.7)");
        }
        if(contact.match(/^[6-9]\d{9}$/gi)){
          $("#namephone").css("background","var(--bs-success)");
          currentVali++;
        }else{
          $("#namephone").css("background","rgba(255,0,0,0.7)");
        }

        if(currentVali===finalVali){
          alert("Thanks! We will call you back within 24hrs");
          $(this).unbind("submit").submit();
          // $("#nameuser").val("");
          // $("#nameemail").val("");
          // $("#namephone").val("");
          $("#nameuser").css("background","var(--bs-white)");
          $("#nameemail").css("background","var(--bs-white)");
          $("#namephone").css("background","var(--bs-white)");
        }else{
          alert("Please fill the valid information");
        }
      });

});



const today = new Date();

const currentDay = today.getDate();

const daysToAdd = currentDay <= 10 ? 10 - currentDay : 10 + (30 - currentDay);

const next10thDate = new Date();
next10thDate.setDate(today.getDate() + daysToAdd);
const formattedDate = new Intl.DateTimeFormat('en-GB').format(next10thDate);
$(".date span").text(formattedDate);








