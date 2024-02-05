function checkForSpam(message) {
    const lowerCaseMess = message.toLowerCase();
    return lowerCaseMess.includes("spam") || lowerCaseMess.includes("sale");
}