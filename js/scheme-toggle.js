document.addEventListener("DOMContentLoaded", function() {
    // 获取 cookies 中的 color-scheme
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    // 设置 cookies
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    let colorScheme = getCookie('color-scheme');

    if (!colorScheme) {
        // 如果没有用户偏好，默认使用暗色模式
        document.documentElement.setAttribute('data-scheme', 'dark');
        setCookie('color-scheme', 'dark', 365); // 保存 365 天
    } else {
        // 如果有用户偏好，使用用户的设置
        document.documentElement.setAttribute('data-scheme', colorScheme);
    }

    // 切换按钮逻辑
    const toggleButton = document.getElementById('scheme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            let currentScheme = document.documentElement.getAttribute('data-scheme');
            let newScheme = currentScheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-scheme', newScheme);
            setCookie('color-scheme', newScheme, 365); // 保存 365 天
        });
    }
});
