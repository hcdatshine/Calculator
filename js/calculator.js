var giatrihientai = 0;
var toantuhientai = '';
var giatrimoinhap = '';
var breakNumber=0;//dung nhap them so 
var breakPoint = 0;//dung nhap them .
var tmp;
var answer = document.getElementById('answer');

function number(number) {
	if (breakNumber == 0) {
	var giatri = answer.value;
	//giatri hien tai = answer = 0;
	answer.value = giatri + number;
	//gia tri htai cap nhat = 7; so vua an
	}
	else {
		answer.value = number;
		breakNumber=0;
	}
}

function point() {
	breakNumber = 0 ;
	if(breakPoint==0){
		answer.value = tmp + "." ;
		breakPoint=1;
	}
}

function pheptinh(toantumoi) {
	if(breakNumber==0){
		tinh(toantuhientai);
		toantuhientai=toantumoi;
		breakNumber=1;
	} 
	else {
		toantuhientai=toantumoi;
	}
	breakPoint=0;
}

function equ() {
	tinh(toantuhientai);
	breakNumber = 1;
	breakPoint=1;
	toantuhientai='';
	answer.value = giatrihientai;//so dang sau dau . ;
}

function fFix(number){
	return parseFloat(number).toLocaleString();//bo so 0 dang sau dau ,
}																			 

function ac() {
	answer.value = '';
	breakPoint=0;
}
function ce(){
	answer.value = 0;
	breakPoint=0;
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


