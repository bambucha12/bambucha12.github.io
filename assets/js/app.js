$(document).ready(function() {
    if (window.Telegram && Telegram.WebApp) {
    console.log("Running inside Telegram WebApp");
} else {
    console.log("Not in Telegram WebApp (running in browser?)");
}
});