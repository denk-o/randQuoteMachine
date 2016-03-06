$(document).ready(function(){
  var queryString="https://andruxnet-random-famous-quotes.p.mashape.com/";
  var twitStringBase = "https://twitter.com/intent/tweet";
  var quote="";
  var author="";
  $("a").click(function(e){
    var quoted="\""+quote+"\"";
    var hastagString="?hashtags=quotes&";
    this.href=twitStringBase+hastagString+"text="+encodeURIComponent(quoted)+
      " - "+author;
  });
  function getQuote(){
    $.ajax({
      url: queryString,
      type: 'GET',
      data:{},
      dataType: 'json',
      success: function(data){
        quote = "\""+data.quote+"\"";
        author = data.author;
        $("#quote_container").html(quote);
        $("#author_container").html(author);
      },
      error: function(err){alert(err)},
      beforeSend: function(xhr){
         xhr.setRequestHeader("X-Mashape-Authorization","eM5JVzIzhfmsh04evkJprqdC2bAnp1rxH4vjsnDFSkxRHWxVQF");
      }
    });
  };
//Main functions start here

  getQuote();
  $("#get_quote").on("click",function(){
    getQuote();
  });
});
