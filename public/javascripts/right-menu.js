$(document).ready(function($) {


    $('#newpost').live('click', function() {
        // Only show add blog if it dosn't currently exist.
        if ($('.add-blog').length) return;
        
        // Ajax request to get current username and list of categorys.
        var request = $.ajax({
          url: "/get_all_categories",
          type: "POST",
        });
        request.done(function(categories) {
            $('.all-blogs').prepend("<div class='add-blog'></div>");
            $('.add-blog').load("/add_new_post.html", function() {
                for (var category in categories) {
                    $('#categories').append('<option>'+categories[category]+'</option>');
                }
            });

        });
    });


});

