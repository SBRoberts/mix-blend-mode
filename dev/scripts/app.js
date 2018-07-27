// Document Ready
$(function(){
    // get each example and do the following to each
    $(".examples").children().each(function(){

        // get the blend mode from div's class
        let blend = $(this).prop("class");

        // get rid of pesky row class
        blend = blend.split(" ")[1];

        // append new html to each example with an overlay that applys the blend variable as css
        $(this).append(`
            <div class="blend">
                <h4 class="${blend}">mix-blend-mode: ${blend}</h4>
            </div>
        `)
        $(this).find(".blend").css("mix-blend-mode",`${blend}`)
    });
});

// if mix-blend-mode is not supported by the browser
if (window.getComputedStyle(document.body).mixBlendMode === undefined) {
    console.log("This Browser Does Not Support the mix-blend-mode property")
}
