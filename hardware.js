// Sample data for demonstration
let joChargers = {
    "390606000211": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-211",
      "type": "AC"
    },
    "390606000231": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 3500,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-231",
      "type": "AC"
    },
    "390606000548": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-548",
      "type": "AC"
    },
    "390606000567": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "private": true,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-567",
      "type": "AC"
    },
    "390606000573": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-573",
      "type": "AC"
    },
    "390606000576": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-576",
      "type": "AC"
    },
    "390606000598": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-598",
      "type": "AC"
    },
    "390606000604": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-604",
      "type": "AC"
    },
    "390606000737": {
      "internet": 2,
      "amps": 32,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1210",
      "phase": 1,
      "power": 7200,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 0,
      "tag": "OUTDID72-737",
      "type": "AC"
    },
    "ODT350001": {
      "internet": 2,
      "amps": 16,
      "gun": 1,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1110",
      "phase": 1,
      "power": 3500,
      "private": false,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 1,
      "tag": "OUTDID35-01",
      "type": "AC"
    },
    "ODT350002": {
      "internet": 2,
      "amps": 16,
      "gun": 0,
      "internet": 2,
      "loc": {
        "lat": 13.09770462257871,
        "lng": 77.60692559999998
      },
      "model": "AW1110",
      "phase": 1,
      "power": 3500,
      "rate": {
        "baserate": "baserate_id_no_parking fee",
        "discount": "discount_id_club_member"
      },
      "socket": 1,
      "tag": "OUTDID35-02",
      "type": "AC"
    }
  }
  
  let joChargerss = [
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
      
      for (const strChargerid in data) {
        if (data.hasOwnProperty(strChargerid)) {
          console.log(`${strChargerid}: ${data[strChargerid]}`);
          let joCharger=data[strChargerid];
          const row=document.createElement('tr');
          row.innerHTML = `
          <td>${strChargerid}</td>
          <td>
          <br>
          <a class="map-link" onclick="openMapPopup()"><i class='fas fa-map-marker-alt' style='font-size:36px'></i></a>
  
    <!-- Trigger the popup with button -->
    <!-- <button class="map-link" onclick="openMapPopup()"><i class='fas fa-map-marker-alt' style='font-size:36px'></i></button> -->
  
    <!-- Popup window -->
    <div class="popup1" id="mapPopup">
      <span class="popup-close" onclick="closeMapPopup()">&times;</span>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.0488546076286!2d-122.08410538464895!3d37.421999679819186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a683b49d%3A0x2dfe0f3438932f79!2sGoogleplex!5e0!3m2!1sen!2sus!4v1563365640511!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <span>  </span>
    <span><i class="fa fa-qrcode" style="font-size:36px"></i></span>
    </br>
    <br> <b class="badge badge-dark mt-1">${joCharger.model}</b>
    <span class="badge badge-dark mt-1">${joCharger.power}|${joCharger.amps}A</span>
    </br>
    <br>
    <span class="badge badge-dark mt-1">${joCharger.tag}|${joCharger.type}|${joCharger.phase} phase|WIFI</span>
    </br>
    <br>
    <span class="badge badge-dark mt-1">GUN ${joCharger.gun} | SOCKET ${joCharger.socket}</span>
    </br>
    <td>
          <div class="toggle-container">
             <div class="toggle" data-content="PUBLIC">
                
             </div>
          </div>
          </td>
          <td><H6 class="pricing"><u>NO PARKING FEE</u></H6>
          <H6 class="pricing2"><u>CLUB MEMBER</u></H6></td>
          <td>
            <div>
              <button class="button-90" href="#" onclick="show('popup')">Update Station</button>
              <button class="button-902" href="#" onclick="show('popup')">Update info</button>
              <button class="button-903" href="#" onclick="show('popup')">clone</button>
              <button class="button-904" href="#" onclick="show('popup')">Update rates</button>
            </div>
          </td>
        `;
        
        tableBody.appendChild(row);
      };
    }}
    
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
      const maxcurrent1 = document.getElementById('max-current').value;
      const guncount1 = document.getElementById('gun-count').value;
      const connectivity1 = document.getElementById('connectivity').value;
      const chargermodel1 = document.getElementById('charger-model').value;
      const currentphase1 = document.getElementById('current-phase').value;
      const maxpower1 = document.getElementById('max-power').value;
    
      const newStation = {
        id: stationId,
        amps: maxcurrent1,
        gun: guncount1,
        internet: connectivity1,
        model: chargermodel1,
        phase: currentphase1,
        power: maxpower1,
      };
      joChargers=Object.assign(newStation)
      generateTableRows([newStation]);
      hideAddStationForm();
      document.getElementById('station-form').reset();
      console.log(joChargers);
    }
    
    
    // Event listeners
    document.getElementById('add-station-btn').addEventListener('click', showAddStationForm);
    document.getElementById('cancel-btn').addEventListener('click', hideAddStationForm);
    document.getElementById('station-form').addEventListener('submit', handleFormSubmission);
    
    // Call the function with the provided data
    generateTableRows(joChargers);
  
      const toggleContainer = document.querySelector('.toggle-container');
      const toggle = toggleContainer.querySelector('.toggle');
      console.log(toggle.getAttribute('data-content'));
 
      toggle.addEventListener('click', () => {
        const condition = true; // Replace with your condition
        
        if (condition) {
          toggle.classList.add('converting');
          setTimeout(() => {
            toggle.classList.toggle('on');
            toggle.classList.remove('converting');
          }, 2000); // Simulating a 2-second conversion time
  
        } else {
          toggle.classList.add('converting')
          setTimeout(() => {
            alert("Task failure"); },2000);
            toggle.classList.toggle('off');
        }
        // console.log(toggle);
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
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
      }
  
      document.getElementById('popup').addEventListener('click', function() {
        // Fetch the JSON data
        for(var strChargerid in joChargers){
          console.log(`Charger id : ${strChargerid}`)
  
          let joCharger = joChargers[strChargerid]
  
          console.log(`Charger info : ${JSON.stringify(joCharger)}`)
        }
  
      });
      function openMapPopup() {
        document.getElementById('mapPopup').style.display = 'block';
      }
      
      // Close the popup window
      function closeMapPopup() {
        document.getElementById('mapPopup').style.display = 'none';
      }
      function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("stations-table");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
      function showEntries() {
        var table = document.getElementById("stations-table");
        var numRows = table.rows.length;
  
        // Get the selected option
        var selectBox = document.getElementById("entries");
        var selectedOption = selectBox.options[selectBox.selectedIndex].value;
  
        // Show or hide rows based on selected option
        for (var i = 1; i < numRows; i++) {
          if (i <= selectedOption) {
            table.rows[i].style.display = "table-row";
          } else {
            table.rows[i].style.display = "none";
          }
        }
      }