// Lấy nút từ DOM
const actionButton = document.getElementById('actionButton');

// Thêm sự kiện click cho nút
actionButton.addEventListener('click', function() {
    // Hiển thị tên các thành viên nhóm trong một hộp thoại
    alert('Các thành viên nhóm: Nguyen, Khoa, Dang');
});