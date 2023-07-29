//barchart (hour spended)
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Streaming',
            'Piloting',
            'Coding',
            'Design'
        ],
        datasets: [{
            label: '# of Votes',
            data: [
                1200,
                3500,
                5500,
                4300
            ],
            backgroundColor: [
                'rgb(150, 0, 50,.8)',
                'rgb(5, 140, 79 ,.8)',
                'rgb(1, 66, 150,.8)',
                'rgb(182, 145, 0 , .8)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 15,
                        family: 'Gotu , sans-serif',
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 15,
                        family: 'Gotu , sans-serif',
                    }
                }
            }
        }
    }
});

//doughnut (general)
const doughnut = document.getElementById('doughnut');
new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: [
            'Streaming',
            'Piloting',
            'Coding',
            'Design'
        ],
        datasets: [{
            data: [8, 24, 41, 27],
            backgroundColor: [
                'rgb(150, 0, 50,.8)',
                'rgb(5, 140, 79 ,.8)',
                'rgb(1, 66, 150,.8)',
                'rgb(182, 145, 0 , .8)'
            ],
            hoverOffset: 5
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 15,
                        family: 'Gotu , sans-serif',
                    }
                }
            }
        }
    }
});

