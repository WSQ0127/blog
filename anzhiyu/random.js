var posts=["posts/a8eee40e/","posts/ffca3de1/","posts/b0170d0e/","posts/362ffdf7/","posts/a996222c/","posts/48555/","posts/59a0de58/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };