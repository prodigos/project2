let key = "gzd5QMerlYZRm97VihohsmpTccaZR2XO"
$(".submit").click(() => {
  let userInput = $(".search").val();
  $.ajax({
    url:`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}=&limit=25&offset=0&rating=g&lang=en`,
  }).done((res) => {
      
    console.log("res",res)
  });

});
