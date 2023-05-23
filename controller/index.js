var arrNhanVien = [];

function rederGiaoDien() {
  var content = "";
  for (var i = 0; i < arrNhanVien.length; i++) {
    var thongTinNhanVien = arrNhanVien[i];
    var tongLuongNhanVien = thongTinNhanVien.tongLuong();
    var xepLoai = thongTinNhanVien.xepLoaiNhanVien();
    content += `<tr>
    <td>${thongTinNhanVien.taiKhoan}</td>
    <td>${thongTinNhanVien.hoTen}</td>
    <td>${thongTinNhanVien.email}</td>
    <td>${thongTinNhanVien.ngayLam}</td>
    <td>${thongTinNhanVien.chucVu}</td>
    <td>${tongLuongNhanVien.toLocaleString()}</td>
    <td>${xepLoai}</td>
    <td>
        <button onclick="xoaNhanVien('${
          thongTinNhanVien.taiKhoan
        }')" class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
        </button>

        <button data-toggle="modal"
        data-target="#myModal" onclick="editNhanVien('${
          thongTinNhanVien.taiKhoan
        }')" class="btn btn-warning">
        <i class="fa-solid fa-pen"></i>
        </button>
        </td>
  </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

document.getElementById("btnThemNV").onclick = function () {
  var thongTinNhanVien = layGiaTriInput();
  console.log(thongTinNhanVien);
  if (thongTinNhanVien) {
    arrNhanVien.push(thongTinNhanVien);

    rederGiaoDien();

    ganGiaTriChoInput("", "", "", "", "", "", "", "");
  }
};

function xoaNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    rederGiaoDien();
  }
}

function editNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam
  );
  document.getElementById("tknv").readOnly = true;
}

function capNhatThongTinNhanVien() {
  var thongTinNhanVienDaChinhSua = layGiaTriInput();
  var index = timViTriNhanVien(thongTinNhanVienDaChinhSua.taiKhoan);
  arrNhanVien[index] = thongTinNhanVienDaChinhSua;
  rederGiaoDien();
}
document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;

// function rederGiaoDienXepLoaiNhanVien() {
//   var content = "";
//   for (var i = 0; i < arrtimKiemNhanVien.length; i++) {
//     var thongTinNhanVien = arrtimKiemNhanVien[i];
//     var tongLuongNhanVien = thongTinNhanVien.tongLuong();
//     var xepLoai = thongTinNhanVien.xepLoaiNhanVien();
//     content += `<tr>
//     <td>${thongTinNhanVien.taiKhoan}</td>
//     <td>${thongTinNhanVien.hoTen}</td>
//     <td>${thongTinNhanVien.email}</td>
//     <td>${thongTinNhanVien.ngayLam}</td>
//     <td>${thongTinNhanVien.chucVu}</td>
//     <td>${tongLuongNhanVien.toLocaleString()}</td>
//     <td>${xepLoai}</td>
//     <td>
//         <button onclick="xoaNhanVien('${
//           thongTinNhanVien.taiKhoan
//         }')" class="btn btn-danger">
//         <i class="fa-solid fa-trash"></i>
//         </button>

//         <button data-toggle="modal"
//         data-target="#myModal" onclick="editNhanVien('${
//           thongTinNhanVien.taiKhoan
//         }')" class="btn btn-warning">
//         <i class="fa-solid fa-pen"></i>
//         </button>
//         </td>
//   </tr>`;
//   }
//   document.getElementById("tableDanhSach").innerHTML = content;
// }

function thanhTichNhanVien() {
  arrtimKiemNhanVien = [];
  var nhanvienInput = document.getElementById("searchName").value;
  console.log(nhanvienInput);
  for (var i = 0; i < arrNhanVien.length; i++) {
    // tìm hiểu về includes trong tìm kiếm
    // tìm hiểu về lowercase và .trim()
    if (arrNhanVien[i].xepLoaiNhanVien() == nhanvienInput) {
      arrtimKiemNhanVien.push(arrNhanVien[i].hoTen);
    }
  }
  rederGiaoDien();
  document.getElementById("ketQua").innerHTML =
    "Kết quả tìm kiếm: " + arrtimKiemNhanVien;
  // console.log(arrtimKiemNhanVien);
}
document.getElementById("btnTimNV").onclick = thanhTichNhanVien;
