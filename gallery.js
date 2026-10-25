/*
 * Photo Gallery - JavaScript
 * 
 * Hai hàm chính:
 *   upDate(previewPic) - Khi di chuột lên ảnh nhỏ, cập nhật ảnh lớn
 *   undo()             - Khi chuột rời ảnh nhỏ, trả về trạng thái ban đầu
 */

function upDate(previewPic) {
  // Lấy phần tử hiển thị ảnh lớn
  var imgDiv = document.getElementById("image");

  // Cập nhật text bằng alt text của ảnh nhỏ
  imgDiv.innerHTML = previewPic.alt;

  // Cập nhật background image bằng src của ảnh nhỏ
  imgDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  // Lấy phần tử hiển thị ảnh lớn
  var imgDiv = document.getElementById("image");

  // Trả text về ban đầu
  imgDiv.innerHTML = "Hover over an image below to display here.";

  // Trả background image về rỗng
  imgDiv.style.backgroundImage = "url('')";
}

