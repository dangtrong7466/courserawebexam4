function upDate(previewPic){
    console.log("Sự kiện upDate đã kích hoạt thành công!");
    console.log("Giá trị thuộc tính ALT: ", previewPic.alt);
    console.log("Giá trị thuộc tính SRC: ", previewPic.src);
    var displayDiv = document.getElementById("image");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo(){
    console.log("Sự kiện undo đã kích hoạt!");
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
