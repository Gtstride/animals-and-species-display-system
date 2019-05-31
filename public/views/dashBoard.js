     $(function(){
        $("#btn-reg").on('click', function(){

            let userdetail = {
                "email": $('#email').val(),
                "password":$('#psw').val(),
                "password-repeat":$('#psw-repeat').val()
            } 
            $.ajax({
                  url: 'http://localhost:3000/users',
                  dataType: 'json',
                  type: 'POST',
                  contentType: 'application/json',
                  data: JSON.stringify(userdetail),
                  success: function( data ){
                      $('#response').html( JSON.stringify( data ));
                      window.location.replace("http://localhost:3000/views/register.html");
                    //   console.log(data)
                  }, 
                  error: function(err){
                    //  alert( errorThrown );
                    console.log('error', err)
                  }
              });
        });

        $("#btn-login").on('click', function(){

          let userdetail = {
            "email": $('#email').val(),
            "password":$('#password').val(),
          } 
          $.ajax({
                url: 'http://localhost:3000/users',
                dataType: 'json',
                type: 'GET',
                contentType: 'application/json',
                data: JSON.stringify(userdetail),
                success: function( data ){
                    $('#response').html( JSON.stringify( data ));
                    window.location.replace("http://localhost:3000/views/dashBoard.html");
                  //   console.log(data)
                },
              //   jqXhr, textStatus, errorThrown 
                error: function(err){
                  //  alert( errorThrown );
                  console.log('error', err)
                }
            });
      });

        $("#upload").on('click', function(){

          let animal = {
              "animal-name": $('#name-of-animal').val(),
              "species-of-animal":$('#species-of-animal').val(),
              "history":$('#brief-history').val()
          } 
          $.ajax({
                url: 'http://localhost:3000/animals',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(animal),
                success: function( data ){
                    $('#response').html( JSON.stringify( data ));
                    window.location.replace("http://localhost:3000/views/dashBoard.html");
                  //   console.log(data)
                },
                error: function(err){
                  console.log('error', err)
                }
            });
      });
})

// function checkUser(email){
//     let alreadyAUser = 0;
//     for(let i = 0; i <=userName.length; i++) {
//         if(email === alreadyAUser) {
//             alert("This username already exit, login");
//         } else { 
//             "Sign-up to enjoy benefit";
//         }
//     }
// }