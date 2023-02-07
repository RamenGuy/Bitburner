/** @param {NS} ns */
export async function main(ns) {
	const args_obj = arguments[0];
	const server = args_obj.args[0]
	const percent = Math.floor(ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server) * 100);
	var bar = "";
	//ns.tprint("Percent is " + percent);
	//ns.tprint("Max money of " + server + " is " + ns.getServerMaxMoney(server));
	//ns.tprint("Current money of " + server + " is " + ns.getServerMoneyAvailable(server));
	for (var e = 0; e < Math.floor(percent/2); e++) {
		bar += "|"
	}
	for (var i = 0; i < 50 - Math.floor(percent/2); i++) {
		bar += "-"
	}
	ns.tprint('['+bar+'] ($'+ns.getServerMoneyAvailable(server)+'/$'+ns.getServerMaxMoney(server)+', '+percent+'%)');

}