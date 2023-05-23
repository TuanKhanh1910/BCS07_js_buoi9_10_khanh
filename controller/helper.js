function layGiaTriInput() {
  var taiKhoan = document.getElementById("tknv").value;
  // kiemTraRong(taiKhoan, "tbTKNV");
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = +document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = +document.getElementById("gioLam").value;

  var valid = true;
  valid =
    kiemTraRong(taiKhoan, "tbTKNV") &
    kiemTraRong(hoTen, "tbTen") &
    kiemTraRong(email, "tbEmail") &
    kiemTraRong(matKhau, "tbMatKhau") &
    kiemTraRong(ngayLam, "tbNgay") &
    kiemTraRong(luongCoBan, "tbLuongCB") &
    kiemTraRong(chucVu, "tbChucVu") &
    kiemTraRong(gioLam, "tbGiolam") &
    kiemTraTaiKhoan(taiKhoan, "tbTKNV") &
    kiemTraEmail(email, "tbEmail") &
    kiemTraSoGioLam(gioLam, "tbGiolam") &
    kiemTraTen(hoTen, "tbTen") &
    checkPass(matKhau, "tbMatKhau") &
    kiemTraLuong(luongCoBan, "tbLuongCB");
  console.log(!valid);
  if (!valid) {
    console.log("first");
    return;
  }

  var thongTinNhanVien = new nhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  console.log(thongTinNhanVien);
  return thongTinNhanVien;
}

function ganGiaTriChoInput(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCoBan;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}
[];

// hàm lưu dữ liệu xuống local
function saveStorage(arrNhanVien) {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

// hàm lấy những dữ liệu từ local lên
function getStorage() {
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
  if (arrNhanVienLocal != null) {
    arrNhanVien = arrNhanVienLocal;
  }
}
