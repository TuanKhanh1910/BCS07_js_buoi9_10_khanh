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
  arrNhanVien.push(thongTinNhanVien);

  rederGiaoDien();

  ganGiaTriChoInput("", "", "", "", "", "", "", "");
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

// function thanhTichNhanVien () {
//     var timNhanVien = document.getElementById("searchName").value;

//     for(var i = 0; i < arrNhanVien.length; i++) {
//         var ketQua = "";
//         if (timNhanVien == "nhân viên xuất sắc") {
//             ketQua +=
//         }
//     }

// }
// document.getElementById("btnTimNV").onclick = thanhTichNhanVien
