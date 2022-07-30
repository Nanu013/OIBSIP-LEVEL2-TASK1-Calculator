function inputFunction(item) {
  var num = document.getElementsByClassName(`item${item}`)[0].innerText;
  document.getElementById('num--inp').value += num;
}

function operation(operator) {
  var opr = operator;
  document.getElementById('num--inp').value += opr;
}

function splOperation(splOp) {
  let num = parseInt(document.getElementById('num--inp').value);
  let res;
  switch (splOp) {
    case 'fract':
        res = 1 / num;
        document.getElementById('num--inp').value = res;
        break;
    case 'sqt':
        res = num * num;
        document.getElementById('num--inp').value = res;
        break;
    case 'root':
        res = Math.sqrt(num);
        document.getElementById('num--inp').value = res.toPrecision(6);
        break;
    case 'cub':
        res = num * num * num;
        document.getElementById('num--inp').value = res;
        break;
  }
}

function calc() {
  let inp = document.getElementById('num--inp').value;
  let newInp = eval(`${inp}`);
  document.getElementById('num--inp').value = newInp;
}

function Clear() {
  let inp = document.getElementById('num--inp').value;
  if (inp.length > 0) document.getElementById('num--inp').value = null;
}

function del(){
  document.getElementById('num--inp').value = document.getElementById('num--inp').value.slice(0,-1);
}
