var posts=["2024/11/30/STM32/GPIO/","2024/12/03/linux/Linux驱动学习--platform总线/","2011/01/13/hello-world/","2023/03/01/share/share/","2023/03/04/share/share-vscode-plugins/","2023/06/04/share/hello-world-js/index/","2023/05/27/share/funny-404-gif/index/","2023/03/23/share/share-cursor/index/","2023/06/08/repost/hexo-anzhiyu-tag-plugins/index/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };