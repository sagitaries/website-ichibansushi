function showAlert() {
    alert(
        "apakah anda yakin ini mengunjungi website ichiban sushi?");
}
function toggledarkmode() {
    document.body.classList.toggle('dark-mode');}
    //ini buat aktifin si tombol dark mode dan tambah alert buat munculin*/
    function hideElement() {
    document.getElementById("aul").style.display = "none" ;

    }
    function showElement() {
        document.getElementById("aul").style.display = "block"
    }
    function upadtetime() {
        let now = new Date();
        // Waktu jakarta//
        document.getElementById("jakarta").innerText =now.toLocaleTimeString("id-ID", {timeZone:"Asia/jakarta"});
        
    }
    setInterval(upadtetime, 1000);
    upadtetime();
    