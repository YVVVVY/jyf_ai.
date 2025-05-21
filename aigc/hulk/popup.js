/**
 * @desc 页面背景切换
 * @author jyf
 * @deta  
 */
 // JS面向对象
 // 事件监听
 // 弹窗加载完后

// 监听 DOMContentLoaded 事件，确保页面完全加载后再执行代码
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面中ID为 "changeColorButton" 的按钮元素
    const changeColorButton = document.getElementById('changeColorButton');
    // 为按钮添加点击事件监听器
    changeColorButton.addEventListener('click', function() {
        // 使用 Chrome 的 tabs API 查询当前活动的标签页
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // 向活动标签页发送消息，请求将背景颜色改为绿色
            chrome.tabs.sendMessage(tabs[0].id, {action: "changeBackgroundColor", color: "green"});
        });
    });
});