var posts=["2023/12/05/2023-ZJ-noip-迷惑行为大赏/","2024/07/05/hello-world/","2024/05/08/树状数组/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };