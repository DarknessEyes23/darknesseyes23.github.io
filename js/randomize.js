$(document).ready(function(){
	$("button").click(function(){
		var number = Math.floor((Math.random() * 10) + 1);
		switch (number) {
			case 1:
				document.getElementById("quote").innerHTML = "„Aj sem tibiti *ooo*”";
				break;
			case 2:
				document.getElementById("quote").innerHTML = "„Zrobiłem coś strasznego, ale imię Hitlera pozostaje nieskalane.”";
				break;
			case 3:
				document.getElementById("quote").innerHTML =
					"„Nie mówiłem, że za Hitlera było lepiej, tylko że były niższe podatki!”";
				break;
			case 4:
				document.getElementById("quote").innerHTML =
					"„Nie ma takiego dowodu, powtarzam jeszcze raz. Jest nagroda pół miliona funtów dla człowieka, który wskaże cień dowodu, że Hitler wiedział o holokauście.”";
				break;
			case 5:
				document.getElementById("quote").innerHTML = "„Tym tym yyy oooo!”";
				break;
			case 6:
				document.getElementById("quote").innerHTML =
					"„Celem życia nie jest przeżycie. To ja przepraszam... yyy... nie będę pańskim nauczycielem. Ludzie mają swoje cele, mają swoje ambicje. Mają swoje ideały. Oni za to walczą i umierają. A pan chce tylko żyć!”";
				break;
			case 7:
				document.getElementById("quote").innerHTML =
					"„Wydałem dekret, że każdy młody chłopiec, bądź mężczyzna, musi iść codziennie połazić z dziewczyną. Jak on się tam już wyżyje, to potem ani sił, ani chęci na obalenie reżimu już nie ma.”";
				break;
			case 8:
				document.getElementById("quote").innerHTML =
					"„Problem nie polega na tym, że zalewają nas imigranci, tylko to, że niewłaściwi imigranci. Ja już określiłem ich raz, co mnie 'kosztowało trzy tysiące euro'. Dyplomata kongijski powiedział, że Europę zalewa afrykańskie szambo.”";
				break;
			case 9:
				document.getElementById("quote").innerHTML = "„To jest obowiązek ojca, zabić, kurwa, tych ludzi!”";
				break;
			case 10:
				document.getElementById("quote").innerHTML = "„Ajn! Ajn! Ajn!”";
				break;
		}})
});