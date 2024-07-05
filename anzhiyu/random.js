var posts=["posts/ffca3de1/","posts/a8eee40e/","posts/362ffdf7/","posts/b0170d0e/","posts/a996222c/","posts/59a0de58/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };