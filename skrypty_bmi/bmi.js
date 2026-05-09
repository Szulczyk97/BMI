window.addEventListener("load",()=>{

	let przycisk = document.getElementById("przycisk");
	przycisk.addEventListener("click",()=>{

		let waga = document.getElementById("waga");
		let waga_wartosc = waga.value;
		let wzrost = document.getElementById("wzrost");
		let wzrost_wartosc = wzrost.value;

		class wynik{
			constructor(waga, wzrost){
				this.waga = waga;
				this.wzrost = wzrost;
			}
			final(){
				let waga_sprawdzona, wzrost_w_metrach_sprawdzony, wskaz;
				let popraw1 = document.getElementById("popraw1");
				let popraw2 = document.getElementById("popraw2");

				if(this.waga < 30 && this.waga > 0){
					popraw1.textContent = "Podana wartość jest za mała!";
					waga.style.border = "3px solid red";
				}else if(this.waga < 0){
					popraw1.textContent = "Podana wartość nie może być ujemna!";
					waga.style.border = "3px solid red";
				}else if(this.waga == 0){
					popraw1.textContent = "To pole jest wymagane!";
					waga.style.border = "3px solid red";
				}else if(this.waga > 300){
					popraw1.textContent = "Podana wartość jest za duża!";
					waga.style.border = "3px solid red";
				}else{
					popraw1.textContent = "";
					waga.style.border = "3px solid green";
					waga_sprawdzona = this.waga;
				}

				if(this.wzrost < 50 && this.wzrost > 0){
					popraw2.textContent = "Podana wartość jest za mała!";
					wzrost.style.border = "3px solid red";
				}else if(this.wzrost < 0){
					popraw2.textContent = "Podana wartość nie może być ujemna!";
					wzrost.style.border = "3px solid red";
				}else if(this.wzrost == 0){
					popraw2.textContent = "To pole jest wymagane!";
					wzrost.style.border = "3px solid red";
				}else if(this.wzrost > 300){
					popraw2.textContent = "Podana wartość jest za duża!";
					wzrost.style.border = "3px solid red";
				}else{
					popraw2.textContent = "";
					wzrost.style.border = "3px solid green";
					wzrost_w_metrach_sprawdzony = this.wzrost / 100;
				}

				let bmi = waga_sprawdzona / (wzrost_w_metrach_sprawdzony * wzrost_w_metrach_sprawdzony);
				let wynik = bmi.toFixed(2);
				let rezultat = document.getElementById("rezultat");

				if(isNaN(wynik)){
					rezultat.textContent = "";
				}else{
					if(wynik <= 16){
						wskaz = "wygłodzenie.";
					}else if(wynik > 16 && wynik < 17){
						wskaz = "wychudzenie.";
					}else if(wynik >= 17 && wynik < 18.5){
						wskaz = "niedowaga.";
					}else if(wynik >= 18.5 && wynik < 25){
						wskaz = "waga prawidłowa.";
					}else if(wynik >= 25 && wynik < 30){
						wskaz = "nadwaga.";
					}else if(wynik >= 30 && wynik < 35){
						wskaz = "otyłość I stopnia.";
					}else if(wynik >= 35 && wynik < 40){
						wskaz = "otyłość II stopnia.";
					}else if(wynik >= 40){
						wskaz = "otyłość III stopnia.";
					}
					rezultat.style.color = "blue";
					rezultat.textContent = "Twoje BMI wynosi "+wynik+", a twój wskaźnik to "+wskaz;
				}
			}
		}

		let oblicz = new wynik(waga_wartosc, wzrost_wartosc);
		oblicz.final();
	});
});