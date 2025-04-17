const ctx = document.getElementById('productCategoriesChart').getContext('2d');
const productCategoriesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Куртки', 'Парки', 'Жилетки'],
        datasets: [{
            label: 'Популярные категории товаров',
            data: [5000, 3000, 7000], // Example data, adjust as needed
            backgroundColor: [
                'rgba(32,238,190,0.6)',
                'rgba(4,135,225,0.6)',
                'rgba(17,10,211,0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(86,109,255)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Количество продаж',
                    color: '#00ffd9',
                    font: {
                        size: 16,
                        family: 'raleway_f',
                        weight: 'bold'
                    }
                },
                ticks: {
                    color: '#00ffd9',
                    font: {
                        size: 14,
                        family: 'raleway_f'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Категории',
                    color: '#00ffd9',
                    font: {
                        size: 16,
                        family: 'raleway_f',
                        weight: 'bold'
                    }
                },
                ticks: {
                    color: '#00ffd9',
                    font: {
                        size: 14,
                        family: 'raleway_f'
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Популярные категории товаров',
                color: '#00ffd9',
                font: {
                    size: 18,
                    family: 'raleway_f',
                    weight: 'bold'
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 14,
                    family: 'raleway_f',
                    weight: 'bold'
                },
                bodyFont: {
                    size: 12,
                    family: 'raleway_f'
                }
            },
            legend: {
                labels: {
                    color: '#00ffd9',
                    font: {
                        size: 14,
                        family: 'raleway_f'
                    }
                }
            }
        }
    }
});
