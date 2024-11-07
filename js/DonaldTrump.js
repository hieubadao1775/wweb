// Kích hoạt hiệu ứng khi tải trang
window.addEventListener('load', function() {
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close-btn');
    popup.classList.add('active');

    // Đóng cửa sổ khi nhấp vào nút đóng
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('active');
    });
});

function showPhoneInfo() {
    document.getElementById("phone-info").style.display = "block";
}

function hidePhoneInfo() {
    document.getElementById("phone-info").style.display = "none";
}
