(function ($) {
    "use strict";
    $(document).foundation();
    $(document).ready(function(){
        $(".at_block").fitVids();
        $("pre code").each(function(i, e) {hljs.highlightBlock(e)});
        $("#at_body").wrap( "<div class='off-canvas-wrap'><div class='inner-wrap'></div></div>" ).append("<a class='at_off_canvas_toggle left-off-canvas-toggle' href='#'><span class='fa fa-bars'></span></a><a class='exit-off-canvas'></a>");
		$(".at_search_input").ghostHunter({results: ".at_search_results", onKeyUp: true, info_template: "<span class='at_search_clear_toggle'>&#215;</span> <span class='at_search_results_amount'>Number of posts found: {{amount}}</span><span class='clearfix'></span>", result_template : "<span><a href='{{link}}'><span class='at_search_results_title'>{{title}}</span></a></span>"});
		$("#at_search").on('click', '.at_search_clear_toggle', function(e) {e.preventDefault();$(".at_search_input").val('');$(".at_search_results").removeClass("at_search_active");});
    });
}(jQuery));
