var form = document.getElementById('myform')

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    var search=document.getElementById('search').value;

    var originalName=search.split(' ').join('');

    fetch('https://api.github.com/users/'+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById('user_avatar').innerHTML=
        `<img src="${data.avatar_url}" style="height: 150px; width: 150px; border-radius: 50%" />`

        if(data.bio!=null){
            document.getElementById('user_bio').innerHTML=
            `<p style="font-family: Arial, sans-serif; color: #000000;">${data.bio}</p>`
        }

        document.getElementById('user_name').innerHTML=
        `<h1 style="font-family: 'Times New Roman', Times, serif; font-weight: bold;">${data.name}</h1>`

        document.getElementById('user_profile').innerHTML=
        `<button class="btn btn-dark" onclick="window.location.href='${data.html_url}'" style="background-color: black; color: white;"><i class="fa fa-github" aria-hidden="true"></i> GitHub</button>`
    })
})