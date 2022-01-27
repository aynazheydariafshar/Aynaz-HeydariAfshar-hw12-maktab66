const myFunction = e => {
    e.preventDefault();
    const element = e.target;

    const value = {};
    for(input of element){
        if(input.name) {
            value[input.name] = input.value;
        }
    }

    function callback() {
        
    }

    setTimeout(callback(),80000);
}