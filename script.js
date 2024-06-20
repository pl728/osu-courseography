// Original data
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
    { source: 344, target: 492 },
    { source: 290, target: 493 },
    { source: 340, target: 493 },
    { source: 372, target: 493 }
];

// Convert nodes and links into Cytoscape format
const cyNodes = nodes.map(node => ({
    data: { id: node.id, name: node.name },
    position: { x: node.x, y: node.y }
}));

const cyEdges = links.map(link => ({
    data: { id: `${link.source}-${link.target}`, source: link.source, target: link.target }
}));

// Initialize Cytoscape
var cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [...cyNodes, ...cyEdges],
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#28a745',
        'label': 'data(name)',
        'text-valign': 'center',
        'text-halign': 'center',
        'color': '#fff',
        'text-outline-width': 2,
        'text-outline-color': '#28a745',
        'font-size': 14,
        'shape': 'round-rectangle',
        'width': 'label',
        'height': 'label',
        'padding': '10px'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 4,
        'line-color': '#333',
        'target-arrow-color': '#333',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    },
    {
      selector: '.highlighted',
      style: {
        'background-color': '#ffeb3b',
        'line-color': '#ffeb3b',
        'target-arrow-color': '#ffeb3b',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }
    }
  ],
  layout: {
    name: 'cose',
    animate: true,
    animationDuration: 1000,
    fit: true,
    padding: 10,
    nodeRepulsion: function (node) { return 2048; },
    idealEdgeLength: function (edge) { return 32; },
    edgeElasticity: function (edge) { return 32; },
    gravity: 1,
    numIter: 1000,
    initialTemp: 1000,
    coolingFactor: 0.99,
    minTemp: 1.0
  },
  wheelSensitivity: 0.1 // Lowering the zoom increment
});

// Event listener to highlight the entire chain of prerequisites on hover
cy.on('mouseover', 'node', function (event) {
  const node = event.target;
  const connectedNodes = node.predecessors().add(node);

  connectedNodes.addClass('highlighted');
});

cy.on('mouseout', 'node', function (event) {
  const node = event.target;
  const connectedNodes = node.predecessors().add(node);

  connectedNodes.removeClass('highlighted');
});

// Event listener to add hyperlinks to nodes
cy.on('tap', 'node', function (event) {
  const node = event.target;
  const courseId = node.data('name').replace(/\s/g, '%20');
  const url = `https://catalog.oregonstate.edu/search/?P=${courseId}`;
  
  window.open(url, '_blank');
});