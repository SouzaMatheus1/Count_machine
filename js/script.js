function count(){
    let start = document.getElementById('start').value
    let final = document.querySelector('input#final').value
    let pass = document.querySelector('input#pass').value

    let result = document.querySelector('div#result')

    if(final == null || start == null || pass == null){
        alert('Pleas try again!')
    }else{
        if(start > final){
        result.innerHTML = 'Counting: '
            for(let i = Number(start);i >= Number(final);i -= Number(pass)){
                result.innerHTML += `${i} `
            }
        result.innerHTML += '!'
        }else{
        result.innerHTML = 'Counting: '
            for(let i = Number(start);i <= Number(final);i += Number(pass)){
                result.innerHTML += `${i} `
            }
            result.innerHTML += '!'
        }
    }
}
