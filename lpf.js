/** @param {NS} ns */
function largestPrimeFactor(n) {
	var i = 2;
	while (i <= n) {
		if (n % i == 0) {
			n /= i;
		} else {
			i++;
		}
	}
	return i;
}
export async function main(ns) {
	const args_obj = arguments[0];
	const number = args_obj.args[0];
	ns.tprint(largestPrimeFactor(number));
}