// Sample data for demonstration
let stationsData = [
    {
      id: 1,
      information: 'Station 1 info',
      mode: 'Normal',
      pricing: '$0.10 per kWh',
    },
    {
      id: 2,
      information: 'Station 2 info',
      mode: 'Fast',
      pricing: '$0.20 per kWh',
    },
    // Add more station objects as needed
  ];
  
  // Function to generate table rows
  function generateTableRows(data) {
    const tableBody = document.querySelector('#stations-table tbody');
    
    data.forEach(station => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>${station.id}</td>
        <td>${station.information}</td>
        <td>
        <div class="toggle-container">
    <div class="toggle" data-content="PUBLIC"></div>
  </div>
        </td>
        <td>${station.mode}</td>
        <td>${station.pricing}</td>
        <td><button class="button-90" href="#" onclick="show('popup')">Update Station</button></td>
      `;
      
      tableBody.appendChild(row);
    });
  }
  
  // Function to show the Add Station form
  function showAddStationForm() {
    const addStationForm = document.getElementById('add-station-form');
    addStationForm.style.display = 'block';
  }
  
  // Function to hide the Add Station form
  function hideAddStationForm() {
    const addStationForm = document.getElementById('add-station-form');
    addStationForm.style.display = 'none';
  }
  
  // Function to handle the form submission
  function handleFormSubmission(event) {
    event.preventDefault();
  
    const stationId = document.getElementById('station-id').value;
    const stationInfo = document.getElementById('station-info').value;
    const stationMode = document.getElementById('station-mode').value;
    const stationPricing = document.getElementById('station-pricing').value;
  
    const newStation = {
      id: stationId,
      information: stationInfo,
      mode: stationMode,
      pricing: stationPricing,
    };
  
    stationsData.push(newStation);
    generateTableRows([newStation]);
    hideAddStationForm();
    document.getElementById('station-form').reset();
  }
  
  // Event listeners
  document.getElementById('add-station-btn').addEventListener('click', showAddStationForm);
  document.getElementById('cancel-btn').addEventListener('click', hideAddStationForm);
  document.getElementById('station-form').addEventListener('submit', handleFormSubmission);
  
  // Call the function with the provided data
  generateTableRows(stationsData);
  const toggleContainer = document.querySelector('.toggle-container');
    const toggle = toggleContainer.querySelector('.toggle');

    toggle.addEventListener('click', () => {
      toggle.classList.add('converting');
      setTimeout(() => {
        toggle.classList.toggle('on');
        toggle.classList.remove('converting');
      }, 2000); // Simulating a 2-second conversion time
    });
    $ = function(id) {
      return document.getElementById(id);
    }
    
    var show = function(id) {
      $(id).style.display ='block';
    }
    var hide = function(id) {
      $(id).style.display ='none';
    }