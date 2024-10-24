document.addEventListener('DOMContentLoaded', function() {
    // Data for job trends
    const jobLabels = ['Programming', 'Digital Marketing', 'Data Analysis', 'Graphic Design', 'Project Management'];
    const jobData = [300, 200, 250, 150, 180]; // Example data, you can replace with real data
  
    // Data for pie charts
    const pieChartData = {
      'Programming': {
        title: 'Programming',
        labels: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
        data: [20, 15, 30, 25, 10] // Example data, you can replace with real data
      },
      'Digital Marketing': {
        title: 'Digital Marketing',
        labels: ['SEO', 'Content Marketing', 'Social Media Marketing', 'Email Marketing', 'PPC'],
        data: [15, 20, 25, 20, 20] // Example data, you can replace with real data
      },
      'Data Analysis': {
        title: 'Data Analysis',
        labels: ['Python', 'R', 'SQL', 'Excel', 'Tableau'],
        data: [35, 20, 15, 20, 10] // Example data, you can replace with real data
      },
      'Graphic Design': {
        title: 'Graphic Design',
        labels: ['Adobe Photoshop', 'Adobe Illustrator', 'Sketch', 'InDesign', 'CorelDRAW'],
        data: [30, 25, 15, 20, 10] // Example data, you can replace with real data
      },
      'Project Management': {
        title: 'Project Management',
        labels: ['Agile', 'Scrum', 'Kanban', 'Waterfall', 'PRINCE2'],
        data: [25, 20, 15, 20, 20] // Example data, you can replace with real data
      }
    };
  
    // Create Chart for job trends
    const ctxJob = document.getElementById('jobChart').getContext('2d');
    const jobChart = new Chart(ctxJob, {
      type: 'bar',
      data: {
        labels: jobLabels,
        datasets: [{
          label: 'Current Job Trends',
          data: jobData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true, // Allow the chart to resize
        maintainAspectRatio: false, // Allow the chart to ignore aspect ratio
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  
    // Get the container width and set it as the width of the chart
    const containerWidth = document.getElementById('jobChartContainer').offsetWidth;
    jobChart.canvas.parentNode.style.width = containerWidth + 'px';
  
    // Create Pie Chart function
    function createPieChart(title, labels, data) {
      const container = document.createElement('div');
      container.className = 'pie-chart-container';
      container.style.textAlign = 'center'; // Align center
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = title;
      container.appendChild(titleElement);
  
      const ctxPie = document.createElement('canvas');
      ctxPie.className = 'pie-chart';
  
      // Set width and height of pie chart canvas
      ctxPie.width = 300;
      ctxPie.height = 300;
  
      container.appendChild(ctxPie);
      document.getElementById('pieChartsContainer').appendChild(container);
  
      new Chart(ctxPie, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false, // Ensure the pie chart doesn't resize
          maintainAspectRatio: false, // Ensure the pie chart doesn't maintain aspect ratio
          legend: {
            display: true,
            position: 'right'
          }
        }
      });
    }
  
    // Display each pie chart one by one
    for (let label in pieChartData) {
      if (pieChartData.hasOwnProperty(label)) {
        const data = pieChartData[label];
        createPieChart(data.title, data.labels, data.data);
      }
    }
  });