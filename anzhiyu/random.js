var posts=["posts/ffca3de1/","posts/a8eee40e/","posts/b0170d0e/","posts/a996222c/","posts/362ffdf7/","posts/59a0de58/","posts/48555/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };