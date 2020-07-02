function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function makeGrid(size)
{
    const etch = document.getElementById("etchSpace");
    etch.innerHTML = "";
    
    const x = 550 / size;
    
    for(let i = 1; i <= size; i++)
    {;
        let row = document.createElement("div");
        row.setAttribute("style", "display: flex; flex-direction: row; border-bottom: 1px solid black; width: 550px");
        row.style.height = x + "px";
        row.id = "row" + i;
        
        document.getElementById("etchSpace").appendChild(row);
        
        for(let j = 1; j <= size; j++)
        {
            let columnPiece = document.createElement("div");
            columnPiece.setAttribute("style", "border-right: 1px solid black; border-left: 1px solid black; border-top: 1px solid black; background-color: lightgrey");
            columnPiece.style.height = x + "px";
            columnPiece.style.width = x + "px";
            columnPiece.id = "column" + i + j;
            
            document.getElementById("row" + i).appendChild(columnPiece);
        }
    }
    
    for(let i = 1; i <= size; i++)
    {
        for(let j = 1; j <= size; j++)
        {
            let element = document.getElementById("column" + i + j);
            
            element.addEventListener("mouseover", () => {element.style.background = random_rgba()});
        }
    }
    
    return false;
}

function formExtract()
{
    const size = document.getElementById("inputField").value;

    makeGrid(size);

    return false;
}

function resetGrid()
{
    const size = prompt("How big do you want your new grid? (max 64)");

    makeGrid(size);

    return false;
}