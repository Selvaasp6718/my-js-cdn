const chart = Array.from(document.querySelectorAll('.js-plotly-plot'))
    .find(c =>
        c.querySelector('.gtitle')?.textContent.includes('Response times KPI')
    );

const chartTitle = chart
    .querySelector('.gtitle')
    .textContent
    .trim()
    .replace(/[<>:"/\\|?*]/g, '_');

const pageName = window.location.pathname
    .split('/')
    .pop()
    .replace('.html', '');

const fileName = `${pageName}_${chartTitle}`;

Plotly.downloadImage(chart, {
    format: 'png',
    
    filename: fileName
});
