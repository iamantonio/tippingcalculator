export default function calculate(amnt, percentButton) {
  if (percentButton === "Reset") {
    return {
      value: '',
      tip: ''
    };
  }
  if (percentButton === "10%") {
    const num = amnt * 0.1;
    console.log("The recommended tip amount is " + num.toFixed(2));
    return { tip: num.toFixed(2) };
  }
  if (percentButton === "15%") {
    const num = amnt * 0.15;
    console.log("The recommended tip amount is " + num.toFixed(2));
    return { tip: num.toFixed(2) };
  }
  if (percentButton === "20%") {
    const num = amnt * 0.2;
    console.log("The recommended tip amount is " + num.toFixed(2));
    return { tip: num.toFixed(2) };
  }
}
