// Display the tree structure in the output area
function displayTree(tree, outputElementId) {
    const outputElement = document.getElementById(outputElementId);
    outputElement.textContent = tree; // Set the tree structure as text content
}

// Handle Create Rule form submission
document.getElementById('form-create-rule').addEventListener('submit', async function (event) {
    event.preventDefault();
    const ruleName = document.getElementById('input-rule-name').value;
    const ruleString = document.getElementById('input-rule-string').value;

    try {
        const response = await fetch('/api/rules', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: ruleName, ruleString }),
        });
        const data = await response.json();
        displayTree(data.ruleAST, 'output-create-rule');
    } catch (error) {
        document.getElementById('output-create-rule').textContent = `Error: ${error.message}`;
    }
});

// Add another rule for combination
document.getElementById('btn-add-rule').addEventListener('click', function () {
    const ruleInputsContainer = document.getElementById('rule-inputs-container');
    const ruleCount = ruleInputsContainer.childElementCount + 1;
    const newRuleGroup = document.createElement('div');
    newRuleGroup.classList.add('rule-group');
    newRuleGroup.innerHTML = `
        <label for="input-combine-rule-${ruleCount}">Rule ${ruleCount}:</label>
        <input type="text" id="input-combine-rule-${ruleCount}" required />
        <label for="select-operator-${ruleCount}">Operator:</label>
        <select id="select-operator-${ruleCount}">
            <option value="AND">AND</option>
            <option value="OR">OR</option>
        </select>
    `;
    ruleInputsContainer.appendChild(newRuleGroup);
});

// Handle Combine Rules form submission
document.getElementById('form-combine-rules').addEventListener('submit', async function (event) {
    event.preventDefault();
    const ruleInputsContainer = document.getElementById('rule-inputs-container');
    const rules = [];
    for (const ruleGroup of ruleInputsContainer.children) {
        const ruleInput = ruleGroup.querySelector('input');
        const operatorSelect = ruleGroup.querySelector('select');
        rules.push({ rule: ruleInput.value, operator: operatorSelect.value });
    }

    try {
        const response = await fetch('/api/combine-rules', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rules }),
        });
        const data = await response.json();
        displayTree(data.combinedAST, 'output-combine-rules');
    } catch (error) {
        document.getElementById('output-combine-rules').textContent = `Error: ${error.message}`;
    }
});

// Handle Evaluate Rule form submission
document.getElementById('form-evaluate-rule').addEventListener('submit', async function (event) {
    event.preventDefault();
    const ruleName = document.getElementById('input-evaluate-rule-name').value;
    const dataJSON = document.getElementById('textarea-data-json').value;

    try {
        const response = await fetch(`/api/evaluate/${ruleName}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: JSON.parse(dataJSON) }),
        });
        const data = await response.json();
        document.getElementById('output-evaluate-rule').textContent = `Evaluation Result: ${data.result}`;
    } catch (error) {
        document.getElementById('output-evaluate-rule').textContent = `Error: ${error.message}`;
    }
});
