import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// const nodes = [
//     { id: 101, x: 100, y: 100, name: "CS 101" },
//     { id: 161, x: 100, y: 200, name: "CS 161" }
// ];

// const links = [
//     { source: 161, target: 162 },
//     { source: 161, target: 271 }
// ];

const nodes = [
    { id: 112, x: 100, y: 100, name: "MTH 112" },
    { id: 161, x: 200, y: 100, name: "CS 161" },
    { id: 162, x: 300, y: 100, name: "CS 162" },
    { id: 225, x: 400, y: 100, name: "CS 225" },
    { id: 261, x: 500, y: 100, name: "CS 261" },
    { id: 271, x: 600, y: 100, name: "CS 271" },
    { id: 274, x: 700, y: 100, name: "CS 274" },
    { id: 290, x: 800, y: 100, name: "CS 290" },
    { id: 312, x: 900, y: 100, name: "CS 312" },
    { id: 321, x: 1000, y: 100, name: "CS 321" },
    { id: 325, x: 1100, y: 100, name: "CS 325" },
    { id: 331, x: 1200, y: 100, name: "CS 331" },
    { id: 340, x: 1300, y: 100, name: "CS 340" },
    { id: 344, x: 1400, y: 100, name: "CS 344" },
    { id: 361, x: 1500, y: 100, name: "CS 361" },
    { id: 362, x: 1600, y: 100, name: "CS 362" },
    { id: 370, x: 1700, y: 100, name: "CS 370" },
    { id: 372, x: 1800, y: 100, name: "CS 372" },
    { id: 373, x: 1900, y: 100, name: "CS 373" },
    { id: 381, x: 2000, y: 100, name: "CS 381" },
    { id: 420, x: 2100, y: 100, name: "CS 420" },
    { id: 424, x: 2200, y: 100, name: "CS 424" },
    { id: 425, x: 2300, y: 100, name: "CS 425" },
    { id: 426, x: 2400, y: 100, name: "CS 426" },
    { id: 427, x: 2500, y: 100, name: "CS 427" },
    { id: 428, x: 2600, y: 100, name: "CS 428" },
    { id: 434, x: 2700, y: 100, name: "CS 434" },
    { id: 440, x: 2800, y: 100, name: "CS 440" },
    { id: 444, x: 2900, y: 100, name: "CS 444" },
    { id: 450, x: 3000, y: 100, name: "CS 450" },
    { id: 453, x: 3100, y: 100, name: "CS 453" },
    { id: 457, x: 3200, y: 100, name: "CS 457" },
    { id: 458, x: 3300, y: 100, name: "CS 458" },
    { id: 461, x: 3400, y: 100, name: "CS 461" },
    { id: 462, x: 3500, y: 100, name: "CS 462" },
    { id: 463, x: 3600, y: 100, name: "CS 463" },
    { id: 464, x: 3700, y: 100, name: "CS 464" },
    { id: 467, x: 3800, y: 100, name: "CS 467" },
    { id: 468, x: 3900, y: 100, name: "CS 468" },
    { id: 472, x: 4000, y: 100, name: "CS 472" },
    { id: 473, x: 4100, y: 100, name: "CS 473" },
    { id: 474, x: 4200, y: 100, name: "CS 474" },
    { id: 475, x: 4300, y: 100, name: "CS 475" },
    { id: 476, x: 4400, y: 100, name: "CS 476" },
    { id: 478, x: 4500, y: 100, name: "CS 478" },
    { id: 480, x: 4600, y: 100, name: "CS 480" },
    { id: 491, x: 4700, y: 100, name: "CS 491" },
    { id: 492, x: 4800, y: 100, name: "CS 492" },
    { id: 493, x: 4900, y: 100, name: "CS 493" }
];

const links = [
    { source: 112, target: 161 },
    { source: 161, target: 162 },
    { source: 112, target: 225 },
    { source: 162, target: 261 },
    { source: 225, target: 261 },
    { source: 162, target: 274 },
    { source: 162, target: 290 },
    { source: 344, target: 312 },
    { source: 261, target: 321 },
    { source: 225, target: 321 },
    { source: 261, target: 325 },
    { source: 225, target: 325 },
    { source: 325, target: 331 },
    { source: 290, target: 340 },
    { source: 261, target: 344 },
    { source: 271, target: 344 },
    { source: 261, target: 361 },
    { source: 261, target: 362 },
    { source: 344, target: 370 },
    { source: 261, target: 372 },
    { source: 271, target: 372 },
    { source: 340, target: 373 },
    { source: 344, target: 373 },
    { source: 372, target: 373 },
    { source: 261, target: 381 },
    { source: 225, target: 381 },
    { source: 325, target: 420 },
    { source: 370, target: 424 },
    { source: 372, target: 424 },
    { source: 424, target: 425 },
    { source: 425, target: 426 },
    { source: 261, target: 427 },
    { source: 424, target: 428 },
    { source: 372, target: 428 },
    { source: 325, target: 434 },
    { source: 340, target: 440 },
    { source: 261, target: 444 },
    { source: 344, target: 444 },
    { source: 271, target: 444 },
    { source: 261, target: 450 },
    { source: 261, target: 453 },
    { source: 261, target: 457 },
    { source: 361, target: 458 },
    { source: 325, target: 461 },
    { source: 361, target: 461 },
    { source: 362, target: 462 },
    { source: 461, target: 462 },
    { source: 462, target: 463 },
    { source: 261, target: 464 },
    { source: 361, target: 464 },
    { source: 361, target: 467 },
    { source: 362, target: 467 },
    { source: 344, target: 467 },
    // { source: 352, target: 468 },
    { source: 344, target: 472 },
    { source: 370, target: 473 },
    { source: 344, target: 473 },
    { source: 261, target: 475 },
    { source: 372, target: 476 },
    { source: 372, target: 478 },
    { source: 344, target: 480 },
    { source: 321, target: 480 },
    { source: 381, target: 480 },
    { source: 261, target: 491 },
    { source: 225, target: 491 },
    // { source: 252, target: 491 },
    { source: 344, target: 492 },
    { source: 290, target: 493 },
    { source: 340, target: 493 },
    { source: 372, target: 493 }
];

// Define a color scale for different course levels
const colorScale = d3.scaleOrdinal()
    .domain(["100", "200", "300", "400", "500"])
    .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]);


// Create the SVG element
const svg = d3.select("#canvas-container")
    .append("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight)
    .style("display", "block")
    .call(d3.zoom().on("zoom", zoomed)) // Apply zoom behavior
    .append("g"); // Add a group to hold all elements

// Define arrowhead marker
svg.append("defs").append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "-0 -5 10 10")
    .attr("refX", 13)
    .attr("refY", 0)
    .attr("orient", "auto")
    .attr("markerWidth", 10)
    .attr("markerHeight", 10)
    .attr("xoverflow", "visible")
    .append("svg:path")
    .attr("d", "M 0,-5 L 10 ,0 L 0,5")
    .attr("fill", "#999")
    .style("stroke", "none");

// Function to resize the canvas on window resize
window.addEventListener("resize", () => {
    d3.select("svg")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight);
});

// Create a simulation for the force layout
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(50).strength(1)) // Adjust link distance and strength
    .force("charge", d3.forceManyBody().strength(-250)) // Adjust charge strength
    .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2).strength(0.1)); // Increase centering force strength

// Add links (edges)
const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke", "#999")
    .attr("stroke-width", 2)
    .attr("marker-end", "url(#arrowhead)"); // Apply the arrowhead marker

// Add nodes
const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("r", 10)
    .attr("fill", d => colorScale(d.name.split(" ")[1].substring(0, 1) + "00")) // Apply color based on course level
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


// Add labels
const label = svg.append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nodes)
    .enter().append("a") // Append <a> element
    .attr("xlink:href", d => `https://catalog.oregonstate.edu/search/?P=${d.name.replace(' ', '%20')}`) // Set the href attribute
    .attr("target", "_blank") // Open link in new tab
    .append("text") // Append <text> element
    .attr("dy", -10)
    .attr("text-anchor", "middle")
    .attr("style", "font-size: 10px;") // Adjust the font size here
    .text(d => d.name);


// Update positions on each tick
simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    label
        .attr("x", d => d.x)
        .attr("y", d => d.y);
});

// Zoomed function to handle zoom and pan
function zoomed(event) {
    svg.attr("transform", event.transform);
}

nodes.forEach(node => {
    if ([112, 161, 162, 225, 261].includes(node.id)) { // Example: pinning these nodes
        node.fixed = true;
    }
});


// Functions for drag events
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}