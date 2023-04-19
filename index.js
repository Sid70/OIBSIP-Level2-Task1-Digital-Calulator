const clr = () => document.getElementById('result').value = " ";


const display = (val) => {
    document.getElementById('result').value += val;
}

const del = () => document.getElementById('result').value = (document.getElementById('result').value).slice(0, -1);

let calculate = () => {
    try {
        let x = document.getElementById('result').value;
        let y = eval(x);
        document.getElementById('result').value = y;
    } catch (error) {
        alert('Please Enter a Valid Expression.');
        console.log(error);
    }
}
