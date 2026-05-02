document.addEventListener('DOMContentLoaded', function() {
    const loadBtn = document.getElementById('load-json');
    const jsonContainer = document.getElementById('json-container');

    loadBtn.addEventListener('click', async function() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            
            jsonContainer.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
            jsonContainer.style.display = 'block';
        } catch (error) {
            jsonContainer.innerHTML = '<p style="color: red;">加载失败：' + error.message + '</p>';
            jsonContainer.style.display = 'block';
        }
    });
});
