const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.jon())
    .then(data => console.log(data))
    .catch(error =>console.log('error happened',error))
}

const loadComments2 = async() => {
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/comments')
        const data=await res.json();
        console.log(data)
    }
    catch(error){
        console.error('data load error')
    }
}