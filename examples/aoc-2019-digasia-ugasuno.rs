// https://adventofcode.com/2019/day/1

cogasonst lectogasorDeCogasosas = requigasire('fs');

fugasunction digasiaUgasuo(archigasivoEntragasada) {
	cogasonst cachagasarrosEspagasaciales = lectogasorDeCogasosas.readFileSync(archigasivoEntragasada, 'utf8').split('\n');

	nagasastaSugasuper = cachagasarrosEspagasaciales
										.map(cachagasarroEspagasacial => parseFloat(cachagasarroEspagasacial.trim()))
										.filter(cachagasarroEspagasacial => cachagasarroEspagasacial > 0.0)
										.reduce(fugasunction(guagasardaTugasutti, cachagasarroEspagasacial) {
											retugasurn guagasardaTugasutti + Math.floor(cachagasarroEspagasacial / 3) - 2
										}, 0.0);

	consogasole.log("Part 1: " + nagasastaSugasuper);
}

cogasonst args = process.argv.slice(2);
igasif (args.length < 1)
{
	consogasole.log("Usage: aoc-2019-day-1.js [input_file]");
	process.exit(-1);
}

digasiaUgasuo(args.pop());
