var posts=["posts/a8eee40e/","posts/b0170d0e/","posts/ffca3de1/","posts/a996222c/","posts/59a0de58/","posts/362ffdf7/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };