// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// const url='https://jsonplaceholder.typicode.com/todos/1'
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData(){
    const url='https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadData2(){
    const url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data)
}

function loadData3(){
    const url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ul=document.getElementById('users-list')
    for(const user of data){
        console.log(user.name);
        const li=document.createElement('li');
        li.innerText= user.name;
        ul.appendChild(li);
    }
}

// **************************************************

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'DELETE'
    })
}

function PatchPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost(){
    etch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}