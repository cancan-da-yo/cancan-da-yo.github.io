document.addEventListener("DOMContentLoaded", function() {
    let colorScheme = Cookies.get('color-scheme');

    if (!colorScheme) {
        // 如果没有存储的偏好，默认使用暗色模式
        colorScheme = 'dark';
        Cookies.set('color-scheme', colorScheme, { expires: 365 });
    }

    document.documentElement.setAttribute('data-scheme', colorScheme);

    // 切换按钮逻辑
    const toggleButton = document.getElementById('scheme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            let currentScheme = document.documentElement.getAttribute('data-scheme');
            let newScheme = currentScheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-scheme', newScheme);
            Cookies.set('color-scheme', newScheme, { expires: 365 });
        });
    }
});
