// !first take refernce of insert
const insert = document.getElementById('insert');

//! ab event listen krna hai from the window because operating system hi batayega ki kon sa 
//! key press hua hai ok
window.addEventListener('keydown', function (e) {
    // !ab insert wala id wala div me pura table insert kro
    insert.innerHTML = `
    <div>
        <table>
            <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
            </tr>
            <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
            </tr>
            
    </table>
    </div>    
    `
}) 