function chuyenTien() {
    let soNhap = document.getElementById("soNhap").value;
    let selectFrom = document.getElementById("selectFrom").value;
    let selectTo = document.getElementById("selectTo").value;
    let tien;
    if (selectFrom == selectTo) {
        alert("Lựa chọn 2 select khác nhau!");
    }
    if (selectFrom == "vnd" && selectTo == "usd") {
        tien = soNhap / 23000;
        document.getElementById("moneyConvert").innerText = "Result: " + tien;
    }
    if (selectTo == "vnd" && selectFrom == "usd") {

        tien = soNhap * 23000;
        document.getElementById("moneyConvert").innerText = "Result: " + tien;
    }
}