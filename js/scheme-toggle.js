document.addEventListener("DOMContentLoaded", function() {
    let colorScheme = localStorage.getItem('color-scheme');

    if (!colorScheme) {
        // 如果没有用户偏好，默认使用暗色模式
        document.documentElement.setAttribute('data-scheme', 'dark');
        localStorage.setItem('color-scheme', 'dark');
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
            localStorage.setItem('color-scheme', newScheme);
        });
    }
});
