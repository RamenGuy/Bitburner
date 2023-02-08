/** @param {NS} ns */
function *enumerate(array) {
   for (let i = 0; i < array.length; i += 1) {
      yield [i, array[i]];
   }
}

export async function main(ns) {
	const args_obj = arguments[0];
	const input = args_obj.args[0]
	var out = "";
	var reps = 1;
	for (let x of enumerate(input)) {
		var i = x[0];
		var char = x[1];
		if (input.length != i+1) {
			if (char == input[i+1]) {
				if (reps >= 9) {
					out += String(reps) + char;
					reps = 1;
				}
				else { 
					reps += 1;
				}
			}
			else {
				out += String(reps) + char;
				reps = 1;
			}
		}
		else {
			reps += 1;
			out += String(reps) + char;
			reps = 0;
		}
	}
	ns.tprintf(out);
}