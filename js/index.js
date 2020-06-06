$(document).ready(function(){
    $(".hero_section_headline").fadeIn(2000);
    $(".hero_section_subline").fadeIn(3000);

    $(".project_box_image").each(function(i){
        $(this).delay(i*600).fadeIn("slow")
    } );

    //$(".project_box").delay(600).fadeIn("slow");
    //$("#projectcreate_box").delay(1200).fadeIn("slow");
    //$("#fernweh_box").delay(1800).fadeIn("slow");
});