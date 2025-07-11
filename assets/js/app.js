$(document).ready(function() {
    if (window.Telegram && Telegram.WebApp) {
    console.log("Running inside Telegram WebApp");
    console.log("Launch mode:", Telegram.WebApp.platform, Telegram.WebApp.isExpanded);
} else {
    console.log("Not in Telegram WebApp (running in browser?)");
}
});