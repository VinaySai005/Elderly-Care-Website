
const reminders = [
    { medication: "Aspirin", time: "08:00" },
    { medication: "Metformin", time: "12:00" }
];

const tableBody = document.querySelector("#reminders-table tbody");

function populateTable() {
    tableBody.innerHTML = "";
    reminders.forEach((reminder, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${reminder.medication}</td>
            <td>${reminder.time}</td>
            <td><button onclick="removeReminder(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function removeReminder(index) {
    reminders.splice(index, 1);
    populateTable();
}

document.querySelector("#reminder-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const medication = document.querySelector("#medication").value;
    const time = document.querySelector("#time").value;
    reminders.push({ medication, time });
    populateTable();
    document.querySelector("#medication").value = "";
    document.querySelector("#time").value = "";
});

populateTable();
