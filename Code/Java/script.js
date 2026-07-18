function upDate(previewPic){
    console.log("Sự kiện upDate đã kích hoạt thành công!");
    console.log("Giá trị thuộc tính ALT: ", previewPic.alt);
    console.log("Giá trị thuộc tính SRC: ", previewPic.src);
    var displayDiv = document.getElementById("image");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.style.lineHeight = "normal";
    displayDiv.style.paddingTop = "160px";
}

function undo(){
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
    displayDiv.style.lineHeight = "350px";
    displayDiv.style.paddingTop = "0px";
}