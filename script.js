function convertTemperature() {
    const x = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
  
    // Check if the input is a valid number
    if (isNaN(x) || x === "") {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    let convertedTemp;
    let unitName;
  
    if (unit === "Celsius") {
      // Convert Celsius to Fahrenheit and Kelvin
      const fahrenheit = (x * 9/5) + 32;
      const kelvin = parseFloat(x) + 273.15;
      convertedTemp = `Fahrenheit:\n ${fahrenheit.toFixed(2)} °F, Kelvin:\n ${kelvin.toFixed(2)} K`;
      unitName = 'Celsius (°C)';
    } 
    
    
    else if (unit === "Fahrenheit") {
      // Convert Fahrenheit to Celsius and Kelvin
      const celsius = (x - 32) * 5/9;
      const kelvin = (x - 32) * 5/9 + 273.15;
      convertedTemp = `Celsius: ${celsius.toFixed(2)} °C, Kelvin: ${kelvin.toFixed(2)} K`;
      unitName = 'Fahrenheit (°F)';
    }
    
    
    else if (unit === "Kelvin") {
      // Convert Kelvin to Celsius and Fahrenheit
      const celsius = x - 273.15;
      const fahrenheit = (x - 273.15) * 9/5 + 32;
      convertedTemp = `Celsius: ${celsius.toFixed(2)} °C, Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
      unitName = 'Kelvin (K)';
    }
  
    //result
    document.getElementById('result').innerHTML = `Converted from ${tempInput} ${unitName}:<br>${convertedTemp}`;
  }
  
