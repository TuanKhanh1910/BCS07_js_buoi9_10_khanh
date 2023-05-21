function nhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;

  this.tongLuong = function () {
    var tongLuongNhanVien = 0;
    if (this.chucVu == "Sếp") {
      tongLuongNhanVien = this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      tongLuongNhanVien = this.luongCoBan * 2;
    } else if (this.chucVu == "Nhân viên") {
      tongLuongNhanVien = this.luongCoBan * 1;
    }
    return tongLuongNhanVien;
  };

  // nhân
  // nhaanvien.trim()
  // Nhân vien == nhân viên
  // nhanvien
  // nhanvientrungbinh

  this.xepLoaiNhanVien = function () {
    if (this.gioLam < 160) {
      return "Nhân viên trung bình";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      return "Nhân viên khá";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 192) {
      return "nhân viên xuất sắc";
    }
  };
}
