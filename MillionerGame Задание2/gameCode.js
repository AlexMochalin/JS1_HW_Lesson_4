var event, ok;
var totalGain = 0;

for (var i = 0; i < game.length; i++) {
	do {//Выводим первый вопрос
		ok = false;
		event = +prompt('Вопрос №' + (i + 1) +'. ' + game[i].question + '\n' + 'Выберите правильный ответ и укажите его номер' + '\n' + game[i].answer1 + game[i].answer2 + game[i].answer3 + game[i].answer4 + '-1 - Выход из игры');
		if (event == -1) {
			break;
		}
		else {
			ok = isAnswer(game[i].amountOfAnswers, event);
		}
	} while (!ok);

	if(event == game[i].correctAnswer) {
		totalGain += game[i].gain;
		alert('Вы угадали и ваш выигрыш составляет ' + totalGain + ' рублей!');
	}
	else {
		alert('Вы не угадали, начните заново!');
		totalGain = 0;
		break;
		
	}
	
}

if (totalGain != 0) {
	alert('Вы очень умный, спасибо за игру!');	
}
var numberQuestion = +prompt('Введите номер вопроса, который хотите посмотреть или -1 для выхода');
switch (numberQuestion){
	case 1:
		var a = game[0].question;
		alert(a);
		break;
	case 2:
		var a = game[1].question;
		alert(a);
		break;
	case 3:
		var a = game[2].question;
		alert(a);
		break;
	case 4:
		var a = game[3].question;
		alert(a);
		break;
	case 5:
		var a = game[4].question;
		alert(a);
		break;
	case -1:
		break;
	default:
		break;	
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый ответ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Вы ввели недопустимый ответ');
        return false;
    }
    return true;
    
}
