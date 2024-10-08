// Function to handle adding a child node
function addChildNode(node) {
    let parentNode = node.parentElement;
    let childUl = parentNode.querySelector('ul');

    // Count existing children
    let childCount = 0;
    if (childUl) {
        childCount = childUl.children.length;
    }

    // Allow adding child only if there are less than 2
    if (childCount < 2) {
        if (!childUl) {
            // Create new ul if it doesn't exist
            childUl = document.createElement('ul');
            parentNode.appendChild(childUl);
        }
        let childValue = "";
        if (childCount == 0) {
            childValue = "Left Child";
        } else if (childCount == 1) {
            childValue = "Right Child";
        }

        // Add a new child node
        let newLi = document.createElement('li');
        let newNodeValue = prompt('Enter new node value:', childValue);
        if (newNodeValue) {
            let newLink = document.createElement('a');
            newLink.href = '#';
            newLink.className = 'node';
            newLink.textContent = newNodeValue;

            newLi.appendChild(newLink);
            childUl.appendChild(newLi);

            // Add event listener to the new child node
            newLink.addEventListener('click', function (e) {
                e.preventDefault();
                addChildNode(newLink); // Recursively allow child node addition
            });
        }
    } else {
        alert("This node already has two children!");
    }
}

// Attach event listeners to existing nodes
document.querySelectorAll('.tree li a').forEach(function (node) {
    node.addEventListener('click', function (e) {
        e.preventDefault();
        addChildNode(node); // Trigger adding a new child
    });
});