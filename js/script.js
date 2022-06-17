fetch("https://jsonplaceholder.typicode.com/users")
.then(Response =>Response.json())
.then(data => {
    
    for(element of data){
        display(element);
    }


})

const display = (element)=>{
    const user = document.createElement('p');
    user.innerHTML = `<strong>${element.name}</strong>`;
    document.getElementById('users').appendChild(user);
}

 let array = ['mango', 'lichi', 'cheri', 'banana', 'apple'];

 const str = JSON.stringify(array)
 console.log(array);
 JSON.parse(str);
 console.log(array);
