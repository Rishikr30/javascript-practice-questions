//create a function that convert from Fahrenheit to Celsius

function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9;
  }
  
  // Example usage:
  const fahrenheit = 212;
  const celsius = FahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit}°F is ${celsius}°C`);
  