import{_ as e,o as i,c as n,a as l}from"./app-5415a0ce.js";const a={},d=l(`<h1 id="electron" tabindex="-1"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> Electron</h1><ul><li>由Github开发的开源框架</li><li>允许开发者使用Web技术搭建跨平台桌面应用 <img src="https://uploadfiles.nowcoder.com/images/20220505/614915689_1651748691679/D2B5CA33BD970F64A6301FA75AE2EB22" alt="alt"></li><li>Electron架构 <img src="https://uploadfiles.nowcoder.com/images/20220505/614915689_1651749247592/D2B5CA33BD970F64A6301FA75AE2EB22" alt="alt"></li><li>Electron进程</li></ul><p><img src="https://uploadfiles.nowcoder.com/images/20220505/614915689_1651750216976/D2B5CA33BD970F64A6301FA75AE2EB22" alt="alt"></p><h1 id="与web开发的不同" tabindex="-1"><a class="header-anchor" href="#与web开发的不同" aria-hidden="true">#</a> 与web开发的不同</h1><ol><li>主进程与渲染进程</li></ol><ul><li>主进程</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.Electron运行package.json的main脚本的进程被称为主进程
2.每个应用只要一个主进程
3.管理原生GUI，典型的窗口（BrowserWindow、Tray）
4.创建渲染进程
5.控制应用生命周期
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app-管理应用生命周期，设置app本身的一些属性
BrowserWindow-管理窗口
ipcMain-和ipcRenderer进行IPC通信
Menu/Tray/MenuItem-原生GUI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>渲染进程</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.展示web页面的进程称为渲染进程
2.通过Node.js/Electron提供的API可以跟系统底层打交道
3.一个Electron应用可以有多个渲染进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>remote-调用主进程模块
desktopCapture- 捕获系统桌面流
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进程间通信</li></ol><ul><li>目的</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通知事件
数据传输
共享数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>IPC模块通信</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Electron提供了IPC通信模块，主进程ipcMain和渲染进程的ipcRenderer
ipcMain/ipcRenderer都是EventEmitter对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进程间通信：从渲染进程到主进程</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Callback写法
ipcRenderer.send(channel,...args)
ipcMain.on(channel,handler)
2.Promise写法
ipcRenderer.invoke(channel,...args)
ipcMain.handle(channel,handler)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>页面间通信</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.通知事件
ipcRenderer.sendTo
2.数据共享
web技术（localStroge,sessionStorage,indexedDB）
remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),s=[d];function r(t,c){return i(),n("div",null,s)}const v=e(a,[["render",r],["__file","0507.html.vue"]]);export{v as default};
