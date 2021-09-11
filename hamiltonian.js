const TTRC_EXCLUSIONS = [
	[45, 28, 44], // doc
	[30, 33, 40], // mario
	[49, 32, 46], // luigi
	[42, 35, 32], // bowser
	[48, 37, 41], // peach
	[31, 48, 28], // yoshi
	[47, 38, 26], // dk
	[46, 31, 42], // falcon
	[27, 30, 34], // ganon
	[41, 44, 29], // falco
	[34, 49, 31], // fox
	[29, 45, 25], // ness
	[33, 41, 43], // ICs
	[43, 42, 36], // kirby
	[35, 43, 37], // samus
	[37, 29, 27], // sheik
	[28, 26, 30], // link
	[40, 25, 35], // yl
	[32, 36, 49], // pichu
	[39, 47, 45], // pika
	[38, 34, 48], // puff
	[36, 39, 38], // m2
	[26, 27, 39], // gnw
	[44, 40, 33], // marth
	[25, 46, 47], // roy
];

const CHAR_STRINGS = [
	"Doc",
	"Mario",
	"Luigi",
	"Bowser",
	"Peach",
	"Yoshi",
	"DK",
	"Falcon",
	"Ganon",
	"Falco",
	"Fox",
	"Ness",
	"ICs",
	"Kirby",
	"Samus",
	"Sheik",
	"Link",
	"Young Link",
	"Pichu",
	"Pika",
	"Puff",
	"Mewtwo",
	"Game & Watch",
	"Marth",
	"Roy",
]
const numChars = TTRC_EXCLUSIONS.length


// optimized fisher yates pog https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
	}
}

function buildGraph() {
	// create the adjacency list
	const graph = []
	for (let i = 0; i < numChars * 2; i++) {
		let row = [];

		if (i < numChars) {
			// Character mode, assign only to stages
			for (let j = numChars; j < numChars * 2; j++) {
				// Exlude stages that are in the TTRC exclusions
				if (!TTRC_EXCLUSIONS[i].includes(j)) {
					row.push(j);
				}
			}
		} else {
			// Stage mode, assign to all chars and no stages
			for (let j = 0; j < numChars; j++) {
				row.push(j);
			}
		}

		// Add this row to our adjacency list
		graph.push(row)
	}

	// Making that adjacency matrix, dawwwwg
	// Easiest way is to just have a matrix of the checkboxes lol
	// which we'll build programmatically
	// for now let's just hardcode a graph and see how it does :miku:

	return graph;
}

function initPathMap(graph) {
	// For every vertex, create a set of size 1 ending in that vertex
	// AKA the set of exclusively that vertex lol
	sets = []

	for (let i = 0; i < graph.length; i++) {
		sets.push([[i]]); // sets[i] = [[i]];
	}

	return sets
}

function randomizeGraph(graph) {
	for (let i = 0; i < graph.length / 2; i++) {
		shuffleArray(graph[i]);
	}
}



function buildHamiltonian(graph, visited, parent, path) {
	// Check base case at some point?
	if (path.length === 50) return true; // We've done everything we can, this is the end!

	// Otherwise, mark that we were here
	visited.push(parent);

	neighbors = graph[parent];

	// Iterate over parent's neighbors, attempting to extend path
	for (let i = 0; i < neighbors.length; i++) {
		// Attempt to branch off here if not visited
		if (visited.includes(neighbors[i])) continue;

		// Append to path and recurse!
		path.push(neighbors[i]);

		if (buildHamiltonian(graph, visited, neighbors[i], path)) {
			// This is a complete path! sick!
			return true;
		} else {
			// Something failed down the line, we need to try again
			path.pop();
		}
	}
	
	// We didn't find anything successful, return false
	visited.pop(); // Should remove ourselves I think
	return false;
}

// Hmmmm ok let's try to code a hamiltonian path thing
// Gonna try to make the hackiest solution of all time
function buildPath() {
	const graph = buildGraph(); // Adjacency matrix
	randomizeGraph(graph);

	let visited = [];
	let parent = 0;
	let path = [parent];

	buildHamiltonian(graph, visited, parent, path)

	console.log(path);

	return;
}