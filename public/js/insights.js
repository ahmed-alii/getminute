const ctx = document.getElementById('effectiveness').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Effectiveness Score',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    // display: false
                }
            },
            x: {
                grid: {
                    // display: false
                }
            }
        }
    }
});


const ctx2 = document.getElementById('time').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Solo', 'Internal', 'External'],
        datasets: [{
            label: 'Effectiveness Score',
            data: [12, 33, 50],
            backgroundColor: [
                'rgb(134,169,255)',
                'rgb(176,255,136)',
                'rgb(255,145,165)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    }
});

const external = document.getElementById('external').getContext('2d');
const myChart3 = new Chart(external, {
    type: 'bar',
    data: {
        labels: ["email1", "email2", "email3", "email1", "email2", "email3", "email1"],
        datasets: [{
            data: [1, 2, 1, 3, 2, 3, 2, 2, 1],
            backgroundColor: [
                'rgb(84,120,211)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {legend: {display: false}}
    }
});

const internal = document.getElementById('internal').getContext('2d');
const myChart4 = new Chart(internal, {
    type: 'pie',
    data: {
        labels: ['1:1 recurring meetings', '1:1 Group meetings', 'One-off 1:1s', 'One-off group meetings'],
        datasets: [{
            label: 'Effectiveness Score',
            data: [33, 50, 44, 55],
            backgroundColor: [
                'rgb(134,169,255)',
                'rgb(176,255,136)',
                'rgb(255,145,165)',
                'rgba(0,0,0,0.24)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    }
});

const network = document.getElementById('network').getContext('2d');
new Chart(network, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                {x: 1, y:2, r: 4},
                {x: 3, y:4, r: 4},
                {x: 6, y:5, r: 6},
                {x: 5, y:10, r: 2},
            ],
            backgroundColor: [
                'rgb(134,169,255)',
                'rgb(176,255,136)',
                'rgb(255,145,165)',
                'rgba(0,0,0,0.24)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                // display: false,
                beginAtZero: true,
                grid: {
                    // display: false
                }
            },
            x: {
                // display: false,
                beginAtZero: true,
                grid: {
                    // display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});