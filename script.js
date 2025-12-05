function createGreeting() {
    // Declare variables to store the input values
    let userName = document.getElementById("nameInput").value;
    let magicWord = document.getElementById("magicWordInput").value;

    // Create the magical greeting message
    let greetingMessage = `Greetings, ${userName}! May the power of ${magicWord} be with you!`;

    // Display the greeting on the webpage
    document.getElementById("greetingOutput").innerHTML = greetingMessage;

    // Display the greeting in an alert box
    alert(greetingMessage);
}
