let key = "gzd5QMerlYZRm97VihohsmpTccaZR2XO";

$(".submit").click(() => {
  let userInput = $(".search").val();
  let userLimit = $(".limit").val();
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}=&limit=${userLimit}&offset=0&rating=g&lang=en`,
  }).done((res) => {
    $(".container").empty();
    let gifsArray = res.data;
    $.each(gifsArray, (i, e) => {
      let postGifs = e.images.downsized.url;
      $(".container").append(`<img src="${postGifs}"/>`);
    });
  });
});
