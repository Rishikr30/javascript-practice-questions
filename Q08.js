//Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Example usage:
  const celsius = 25;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is ${fahrenheit}°F`);
  