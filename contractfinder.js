/** @param {NS} ns */
function scan(ns, parent, server, list) {
	const children = ns.scan(server, list);
	for (let child of children) {
		if (parent == child) {
			continue;
		}
		list.push(child);
		scan(ns, server, child, list);
	}
}

export function list_servers(ns) {
	const list = [];
	scan(ns, '', 'home', list);
	return list;
}

export async function main(ns) {
	const args_obj = arguments[0];
	const exclude = args_obj.args;
	let servers = list_servers(ns);
	const boughtServers = ns.getPurchasedServers(ns);
	servers = servers.filter(s => !boughtServers.includes(s));
	//servers = servers.filter(s => !s.includes(args[0]));
	servers = servers.filter(s => !exclude.includes(s) && ns.ls(s).find(f => f.endsWith(".cct")));
	//const hostname = servers.find(s => ns.ls(s).find(f => f.endsWith(".cct")) && !exclude.includes(s))
	if (servers.length == 0) {
		ns.tprint("No coding contracts found.");
		return;
	}

	ns.tprint(`Found coding contract on '${servers}'.`)
}