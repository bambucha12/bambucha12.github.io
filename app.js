$(document).ready(function() {
    if (Telegram.WebApp && Telegram.WebApp.expand) {
    Telegram.WebApp.expand();
} else {
    console.error("Telegram.WebApp.expand() is not available");
}
});