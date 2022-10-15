const posts=[
    {title:'Post One',body:'This is post one',createdAt: new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt: new Date().getTime()}
]
let intervalid = 0;

function getPosts(){
    setTimeout(()=>{

        let output='';

        posts.forEach((posts,index)=>{

            output+=`<li>${posts.title} - last Edited${(new Date().getTime() - posts.createdAt)/1000}seconds ago</li>`;

        });

        document.body.innerHTML=output;

    },1000)
}

function createPost(post){

    setTimeout(()=>{

        posts.push({ ...post,createdAt: new Date().getTime()});

    },2000);
}
createPost({title:'Post Three',body:'This is post three' ,createdAt : new Date().getTime(),getPosts})
     .then(() => {
        getPosts();
        deletePost().then(() => (
            getPosts()
        ))
     })

createPost({title:'Post Four',body:'This is post four'},getPosts);