// Write your code in this file!
const currentUser = "Caleb Kavindu"; 
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = welcomeMessage.slice(0, 7) + ", " + currentUser.slice(0, 5) + "!";
console.log(shortGreeting)