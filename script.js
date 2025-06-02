document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const tableBody = document.querySelector('#productTable tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        
        const name = document.getElementById('name').value;
        const price = parseFloat(document.getElementById('price').value).toFixed(2);
        const unit = document.querySelector('input[name="unit"]:checked').value;
        const description = document.getElementById('description').value;

     
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${price}</td>
            <td>${unit}</td>
            <td>${description || '-'}</td>
        `;

      
        tableBody.appendChild(row);

        
        form.reset();
        document.getElementById('unitPiece').checked = true; 
    });
});