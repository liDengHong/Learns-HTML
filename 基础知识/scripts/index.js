/**添加事件 */
// var image = document.getElementsByClassName('image')[0];
// console.log(image);
// image.onclick = function () {
//     alert('image');
// }

var p = document.getElementsByClassName('ssdsd')[0];
console.log(p);
p.onclick = function () {
    alert(p);
}

/**修改html 中某个选择器的文本 */
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

/**数据类型*/
// 字符串
let string = '丽丽子';
//数字
let number = 10;
//Boolean
let isSuccess = true;
//Array, 可拼装不同类型的数据
let array = [10, '数字', true];
//Object 
let object = document.querySelector('p');

/**条件判断语句 */
let isSelect = 'select';
if (isSelect == 'select') {
    alert('你选择了她');
} else {
    alert('你没有选择她');
}

/**函数 */
function addCount(numA, numB, numC) {
    let sum = numA + numB + numC;
    alert('和是' + sum);
    return sum;
}

addCount(12, 34, 454);

/**切换图片 */
let image1 = document.querySelector('img');
image1.onclick = function () {
    let imageScr = image1.getAttribute('src');
    if (imageScr === "images/touxiang.png") {
        image1.setAttribute('src', 'images/test.gif');
    } else {
        image1.setAttribute('src', 'images/touxiang.png');
    }
};

/**给切换用户按钮做处理 */
let btn = document.querySelector('button');
///设置标题
function setH1Name (name) {
    let h1 = document.querySelector('h1');
    h1.textContent = name;
}

///输入用户名称
function setUserName() {
    let name = prompt('输入名称');
    localStorage.setItem('name',name);
    setH1Name(name);
}

///读取存储的名称
let locationNaem = localStorage.getItem('name');
if (!locationNaem) {
    setH1Name('你是大傻逼啊');
}else {
    setH1Name(locationNaem);
}

btn.onclick = setUserName;