function validation(form) {

    function createError(input, text){
        const parent = input.parentNode;
        parent.classList.add('error')
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
        if (input.value == "") {
            console.log('Error fields');
            createError(input, 'error field')
            result = false
        }
    }

    

    return result

    console.log(form);
}





document.getElementById('logpass').addEventListener('submit', function(event){
    event.preventDefault()

    if(validation(this) == true) {
        alert('Access')
    }

})