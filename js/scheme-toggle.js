document.addEventListener("DOMContentLoaded", function() {
    // 获取颜色模式
    let colorScheme = localStorage.getItem('color-scheme');

    if (!colorScheme) {
        // 如果没有用户偏好，默认使用暗色模式
        colorScheme = 'dark';
        localStorage.setItem('color-scheme', colorScheme);
    }

    // 应用颜色模式
    document.documentElement.setAttribute('data-scheme', colorScheme);

    // 切换按钮逻辑
    const toggleButton = document.getElementById('scheme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            let currentScheme = document.documentElement.getAttribute('data-scheme');
            let newScheme = currentScheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-scheme', newScheme);
            localStorage.setItem('color-scheme', newScheme);
        });
    }
});
