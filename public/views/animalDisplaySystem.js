// document.getElementsByClassName("animalsDetails").value


$(document).ready(function() {
  $("#btn-submit").alert("ok");
     
    $("#btn-submit").click(function(){ alert("The paragraph was clicked."); });
  });
 </script>

    (function($){
        function processForm( e ){
            $.ajax({
                url: 'http://localhost:3000/posts',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });

            e.preventDefault();
        }

        $('#my-form').submit( processForm );
    })(jQuery);