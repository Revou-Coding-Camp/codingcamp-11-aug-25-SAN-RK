document.getElementById("dataForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let jk = document.querySelector('input[name="jk"]:checked').value;
    let pesan = document.getElementById("pesan").value;

    let table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = nama;
    newRow.insertCell(1).innerText = new Date(tgl).toLocaleDateString("en-US", {year:"numeric", month:"long", day:"numeric"});
    newRow.insertCell(2).innerText = jk;
    newRow.insertCell(3).innerText = pesan;
    newRow.insertCell(4).innerHTML = '<a href="#">Klik Disini</a>';
    newRow.insertCell(5).innerHTML = '<span class="delete-btn" onclick="deleteRow(this)">🗑️</span>';

    document.getElementById("dataForm").reset();
});

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}