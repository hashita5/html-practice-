let student = {
    id: 101,
    sname:"HARSHITA",
    age: 20,
    isWorking:false,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBz7cufwO3nEGUJ36AoAJfwFuSXuXc_1-OQ&s"

}
let = {id,sname,age,isWorking,img} = student
let info = `
<h1>hey welcome!😊</h1>
<img src = "${img}" alt ="no image" height:100px width:100px>
<h2>ID:${id}</h2>
<h2>name:${sname}</h2>
<h2>age:${age} yr old </h2>
<h2>Working/student:${isWorking? "working professional ": "student"}</h2>




`
document.write(info)