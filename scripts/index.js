/**
 * Typewriter Effect for Greeting!
*/
var quoteArray = ["Xin chào, mình là Ánh. ❤️<br>Chúc bạn sinh nhật tuổi 15 vui vẻ, mong mọi điều tốt đẹp nhất sẽ đến với bạn!<br>Cho bạn sức khỏe siêu phàm để không bị ốm.<br>Cho bạn tính cẩn thận để &radic;16 = 4<br>Cho bạn sự đẹp choai để lớn lên không bị ế vợ.<br>Cho bạn tình yêu thương để đối xử thật tốt với mọi người<br>Cho bạn tự tin để vững bước trước mọi khó khăn.<br>3 năm cấp 3 vô cùng có ý nghĩa, hãy trân trọng và biến nó trở nên thật đẹp nhé! Hãy liên hệ với mình nếu bạn cần. Don't be shy!"];
var textPosition = 0;
var speed = 50;

const typewriter = () => {
    document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span id="cursor">|</span>';

    if (textPosition++ != quoteArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)
