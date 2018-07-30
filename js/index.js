var giatrihientai = 0;
var toantuhientai = '';
var giatrimoinhap = '';
var t=0;
var p = 0;
var tmp;
var answer = document.getElementById('answer');

function pheptinh(toantumoi) {
	if(t==0){
		tinh(toantuhientai);
		toantuhientai=toantumoi;
		t=1;
	} 
	else {
		toantuhientai=toantumoi;
	}
	p=0;
}

function equ() {
	tinh(toantuhientai);
	t = 1;
	p=1;
	toantuhientai='';
	answer.value = giatrihientai;//so dang sau dau . ;
}

function fFix(number){
	return parseFloat(number).toLocaleString();//bo so 0 dang sau dau ,
}																			 

function ac() {
	answer.value = '';
	p=0;
}
function ce(){
	answer.value = 0;
	p=0;
}

function number(num) {
	if (t == 0) {
	var giatri = answer.value;
	//giatri hien tai = answer = 0;
	answer.value = giatri + num;
	//gia tri htai cap nhat = 7; so vua an
	}
	else {
		answer.value = num;
		t=0;
	}
	//=7
}

function point() {
	t = 0 ;
	if(p==0){
		var tmp = answer.value;
		answer.value = tmp + "." ;
		p=1;
	}
}

function add (a,b){
	return parseFloat(a) + parseFloat(b);
}

function sub (a,b){
	return parseFloat(a) - parseFloat(b);
}

function mul (a,b){
	return parseFloat(a) * parseFloat(b);
}

function div (a,b){
	return parseFloat(a) / parseFloat(b);
}

function mod (a,b){
	return parseFloat(a) % parseFloat(b);
}
//giatrihientai  gia tri nhap  toan tu hien tai

function tinh(n) { 
	switch(n) {
		case 1:
				giatrihientai=add(giatrihientai, answer.value);
			break;
		case 2:
				giatrihientai=sub(giatrihientai, answer.value);
			break;
		case 3: 
				giatrihientai=mul(giatrihientai, answer.value);
			break;
		case 4:
				giatrihientai = div(giatrihientai, answer.value);
			break;
		case 5:
				giatrihientai= mod(giatrihientai, answer.value);
			break;
		default : 
				giatrihientai=answer.value;
			break;
	}
}


