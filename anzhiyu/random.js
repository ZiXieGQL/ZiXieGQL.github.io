var posts=["2024/09/03/FreeRTOS-创建任务/","2024/09/03/FreeRTOS-启动第一个任务/","2024/09/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };