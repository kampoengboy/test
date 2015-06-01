$.ajax({
  url: "http://beta.kolexia.com/post/getPosts",
  success: function( data ) {
    var x = document.getElementById('tes');
    for(var i=0;i<data.users.length;i++)
    {
        x.append("<li>"+data.users[i]+"</li>");
    }
  }
});