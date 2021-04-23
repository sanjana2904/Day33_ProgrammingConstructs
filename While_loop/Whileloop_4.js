/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made. */
let money = 100;
let win = 0;
let loose = 0;
while (money > 0 && money < 200) {
	let luck = Math.floor(Math.random() * 10) % 2;
	if (luck == 0) {
		loose++;
		money--;
	} else {
		win++;
		money++;
	}
}
console.log("final money: " + money);
console.log("total wins: " + win);
console.log("total loose: " + loose);
