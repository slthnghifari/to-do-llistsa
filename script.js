function addTask() {

    // Mengambil input
    let input = document.getElementById("taskInput");

    let taskText = input.value;

    // Kalau input kosong
    if (taskText === "") {
        alert("Tugas belum diisi!");
        return;
    }

    // Membuat elemen tugas
    let task = document.createElement("li");

    task.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Hapus</button>
    `;

    // Klik teks → coret tugas
    task.querySelector("span").onclick = function() {
        this.classList.toggle("completed");
    };

    // Menambahkan tugas ke daftar
    document.getElementById("taskList").appendChild(task);

    // Mengosongkan input
    input.value = "";
}


// Menekan Enter → tambah tugas
document.getElementById("taskInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


function deleteTask(button) {

    // Menghapus tugas
    button.parentElement.remove();

}