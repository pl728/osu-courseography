import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const nodes = [
    { id: 101, x: 100, y: 100, name: "CS 101: COMPUTERS: APPLICATIONS AND IMPLICATIONS" },
    { id: 161, x: 100, y: 200, name: "CS 161: INTRODUCTION TO COMPUTER SCIENCE I" },
    { id: 162, x: 100, y: 300, name: "CS 162: INTRODUCTION TO COMPUTER SCIENCE II" },
    { id: 1621, x: 100, y: 400, name: "CS 162H: INTRODUCTION TO COMPUTER SCIENCE II" },
    { id: 201, x: 100, y: 500, name: "CS 201: COMPUTER PROGRAMMING FOR NON-CS MAJORS" },
    { id: 225, x: 100, y: 600, name: "CS 225: DISCRETE STRUCTURES IN COMPUTER SCIENCE" },
    { id: 261, x: 100, y: 700, name: "CS 261: DATA STRUCTURES" },
    { id: 271, x: 100, y: 800, name: "CS 271: COMPUTER ARCHITECTURE AND ASSEMBLY LANGUAGE" },
    { id: 274, x: 100, y: 900, name: "CS 274: INTRODUCTION TO SYSTEMS PROGRAMMING" },
    { id: 290, x: 100, y: 1000, name: "CS 290: WEB DEVELOPMENT" },
    { id: 312, x: 100, y: 1100, name: "CS 312: SYSTEM ADMINISTRATION" },
    { id: 321, x: 100, y: 1200, name: "CS 321: INTRODUCTION TO THEORY OF COMPUTATION" },
    { id: 325, x: 100, y: 1300, name: "CS 325: ANALYSIS OF ALGORITHMS" },
    { id: 331, x: 100, y: 1400, name: "CS 331: INTRODUCTION TO ARTIFICIAL INTELLIGENCE" },
    { id: 340, x: 100, y: 1500, name: "CS 340: INTRODUCTION TO DATABASES" },
    { id: 344, x: 100, y: 1600, name: "CS 344: OPERATING SYSTEMS I" },
    { id: 352, x: 100, y: 1700, name: "CS 352: INTRODUCTION TO USABILITY ENGINEERING" },
    { id: 361, x: 100, y: 1800, name: "CS 361: SOFTWARE ENGINEERING I" },
    { id: 362, x: 100, y: 1900, name: "CS 362: SOFTWARE ENGINEERING II" },
    { id: 3621, x: 100, y: 2000, name: "CS 362H: SOFTWARE ENGINEERING II" },
    { id: 370, x: 100, y: 2100, name: "CS 370: INTRODUCTION TO SECURITY" },
    { id: 372, x: 100, y: 2200, name: "CS 372: INTRODUCTION TO COMPUTER NETWORKS" },
    { id: 373, x: 100, y: 2300, name: "CS 373: DEFENSE AGAINST THE DARK ARTS" },
    { id: 381, x: 100, y: 2400, name: "CS 381: PROGRAMMING LANGUAGE FUNDAMENTALS" },
    { id: 391, x: 100, y: 2500, name: "CS 391: SOCIAL AND ETHICAL ISSUES IN COMPUTER SCIENCE" },
    { id: 3911, x: 100, y: 2600, name: "CS 391H: SOCIAL AND ETHICAL ISSUES IN COMPUTER SCIENCE" },
    { id: 440, x: 100, y: 2700, name: "CS 440: DATABASE MANAGEMENT SYSTEMS" },
    { id: 444, x: 100, y: 2800, name: "CS 444: OPERATING SYSTEMS II" },
    { id: 450, x: 100, y: 2900, name: "CS 450: INTRODUCTION TO COMPUTER GRAPHICS" },
    { id: 462, x: 100, y: 3000, name: "CS 462: SENIOR SOFTWARE ENGINEERING PROJECT II" },
    { id: 463, x: 100, y: 3100, name: "CS 463: SENIOR SOFTWARE ENGINEERING PROJECT" },
    { id: 464, x: 100, y: 3200, name: "CS 464: OPEN SOURCE SOFTWARE" },
    { id: 473, x: 100, y: 3300, name: "CS 473: INTRODUCTION TO DIGITAL FORENSICS" },
    { id: 474, x: 100, y: 3400, name: "CS 474: OPERATING SYSTEMS II" },
    { id: 478, x: 100, y: 3500, name: "CS 478: NETWORK SECURITY" },
    { id: 491, x: 100, y: 3600, name: "CS 491: COMPUTER SCIENCE SKILLS FOR SIMULATION AND GAME PROGRAMMING" },
    { id: 492, x: 100, y: 3700, name: "CS 492: MOBILE SOFTWARE DEVELOPMENT" },
    { id: 493, x: 100, y: 3800, name: "CS 493: CLOUD APPLICATION DEVELOPMENT" },
    { id: 494, x: 100, y: 3900, name: "CS 494: ADVANCED WEB DEVELOPMENT" }
];

const links = [
    { source: 161, target: 162 },
    { source: 161, target: 271 },
    { source: 162, target: 201 },
    { source: 162, target: 261 },
    { source: 162, target: 274 },
    { source: 162, target: 290 },
    { source: 225, target: 261 },
    { source: 261, target: 321 },
    { source: 261, target: 325 },
    { source: 261, target: 344 },
    { source: 261, target: 361 },
    { source: 261, target: 362 },
    { source: 261, target: 381 },
    { source: 290, target: 340 },
    { source: 312, target: 312 },
    { source: 321, target: 325 },
    { source: 325, target: 331 },
    { source: 344, target: 370 },
    { source: 344, target: 444 },
    { source: 372, target: 373 },
    { source: 372, target: 478 },
    { source: 361, target: 462 },
    { source: 362, target: 463 },
    { source: 362, target: 462 },
    { source: 344, target: 473 },
    { source: 344, target: 474 },
    { source: 362, target: 464 },
    { source: 290, target: 492 },
    { source: 290, target: 493 },
    { source: 290, target: 494 },
];



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
    .force("link", d3.forceLink(links).id(d => d.id).distance(200).strength(2)) // Adjust link distance and strength
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
    .attr("fill", "#69b3a2")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

// Add labels
const label = svg.append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
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