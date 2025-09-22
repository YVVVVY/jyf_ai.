团队上线了一张用户头像图片，放在CDN上做加速。后来后端同学更新了头像文件，但前端刷新页面后，用户依旧看到的是旧的头像。

- 强缓存和协商缓存
    MaxAge 倒计时 http 1.1
    Expires 时间戳 客户端的时间不准 http 1.0 

    304
    lastModified IfModifiedSince
    ETag IfNoneMatch

    - CDN content Delivery Network 内容分发网络  
      通过将静态资源存储到全球各地边缘节点，使用户就近访问，减少网络延迟和服务器负载，从而加快图片加载

- 怎么解决
    1. 给资源加上hash avatar.png?v=123 版本号
    2. avatar.abc123.png 文件名 + hash 给资源加上hash

## 跨域
- JSONP script 标签 src 可以跨域 只能GET 请求
- CORS 服务器端设置响应头 Access-Control-Allow-Origin 可以跨域

- 同源策略
    Same-Origin Policy
    同源策略限制网页只能访问同源（协议、端口、域名）的资源，防止恶意网站在你登录状态下，偷偷读取或操作其他网站的数据
    避免敏感信息被泄漏，是浏览器隔离风险的核心安全机制。
- CORS 服务器配置Access-Control-Allow-Origin **白名单机制**。恶意网站没办法让别人的服务器给他开权限，所以跨域数据不通
    你 -> 恶意网站 evil.com 他想偷bank.com 信息
    GET bank.com/api/balance bank.com Access-Control-Allow-Origin 没有evil.com 不执行
    简单请求
    预检请求
- 代理
  开发期间的代理 vite 正向代理
  上线代理 nginx  反向代理
  代码前端打包，在服务器上 请求 -> nginx 拦截  
  后端代码也在服务器上
- websocket 协议 全双工通信 服务器端可以主动向客户端推送消息 客户端也可以主动向服务器端推送消息
    QQ socket 协议 通信 

## websocket 协议 跨域
- 在web 浏览器端的双工通信协议 
  WebSocket 是html5 对象，在web端实现即时通信
- 在服务器端 ws 支持 webSocket
- 首次通过http协议建立连接 101 switch protocol转成ws 通信