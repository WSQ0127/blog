var posts=["posts/ffca3de1/","posts/1059/","posts/59a0de58/","posts/44007/","posts/48555/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };