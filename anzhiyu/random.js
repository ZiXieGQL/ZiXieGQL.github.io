var posts=["2023/03/04/share/share-vscode-plugins/","2011/01/13/hello-world/","2023/04/17/notes/git-usage/","2023/03/01/share/share/","2023/03/26/ai/aigen/code-writed-by-cursor/","2023/04/02/ai/aigen/cursor-docker/","2023/02/20/ai/new-bing/index/","2023/03/26/ai/aigen/md-writeby-cursor/","2023/06/08/demo/demo-anzhiyu/index/","2023/03/18/ai/new-bing-visit/index/","2023/05/30/demo/demo-blog-encrypt/index/","2023/05/30/demo/demo-tags-plugins/index/","2023/06/13/hexo/hexo-add-rss/index/","2023/06/04/hexo/hexo-basic-usage/index/","2023/06/13/hexo/hexo-guestbook-barrager/index/","2023/06/30/hexo/hexo-fps/index/","2023/06/30/hexo/hexo-gulp/index/","2023/06/06/hexo/hexo-theme-issues/index/","2023/04/13/notes/my-first-domain/index/","2023/02/27/notes/notes1/index/","2023/05/27/share/funny-404-gif/index/","2023/06/04/share/hello-world-js/index/","2023/03/23/share/share-cursor/index/","2023/06/08/repost/hexo-anzhiyu-tag-plugins/index/","2023/03/26/ai/aigen/cursor-electron/index/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };