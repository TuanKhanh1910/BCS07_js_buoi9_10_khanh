// Hàm kiểm tra người dùng có nhập dữ liệu hay không
function kiemTraRong(checkInput, idThongBao) {
  if (checkInput) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  }
}

function kiemTraTaiKhoan(checkInput, idThongBao) {
  if (checkInput.length >= 4 && checkInput.length <= 6) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đủ kí tự";
    return false;
  }
}

function kiemTraLuong(checkInput, idThongBao) {
  if (checkInput >= 1000000 && checkInput <= 20000000) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng số lương (1.000.000 - 20.000.000)";
    return false;
  }
}

function kiemTraEmail(checkInput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var hopLe = regexEmail.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng Email";
    return false;
  }
}

function kiemTraSoGioLam(checkInput, idThongBao) {
  if (checkInput >= 80 && checkInput <= 200) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng số giờ làm ( từ 80 giờ - đến 200 giờ)";
    return false;
  }
}

// function removeAscent(str) {
//   if (str === null || str === undefined) return str;
//   str = str.toLowerCase();
//   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//   str = str.replace(/đ/g, "d");
//   return str;
// }

// /^[A-Za-z]+$/;
function kiemTraTen(checkInput, idThongBao) {
  var regexTen = /^[\p{L} ]+$/u;
  var hopLe = regexTen.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng chỉ nhập chữ không nhập số";
    return false;
  }
}

function checkPass(checkInput, idThongBao) {
  var checkPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var hopLe = checkPass.test(checkInput);
  if (hopLe == true && checkInput.length >= 6 && checkInput.length <= 10) {
    document.getElementById(idThongBao).style.display = "none";
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng đúng theo yêu cầu: từ 6-10 ký tự (ít nhất 1 ký tự số,1 ký tự in hoa,1 ký tự đặc biệt) ";
    return false;
  }
}
