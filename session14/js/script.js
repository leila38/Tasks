function changeImg() {
    var img = document.querySelector('#image1')
    console.log(img.src)
    if (img.src.endsWith("images/vWbkhqa.jpg"))
        img.src = "images/0xsyCg.jpg"
    else {
        img.src = "images/vWbkhqa.jpg"
    }
}
var userForm = document.getElementById('userForm')
var users = []
var editIndex = null
userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target[0])
    console.log(e.target[1])

    var user_info = {
        name: e.target[0].value,
        email: e.target[1].value,
    }
    if (editIndex !== null) {
        users[editIndex] = user_info
        editIndex = null
        userForm.querySelector("button").innerText = "Add User"
    } else {

        users.push(user_info)
    }
    console.log(users)
    showUsers()
}
)
var editUser = (i) => {
    var user = users[i]
    userForm.elements[0].value = user.name
    userForm.elements[1].value = user.email
    editIndex = i
    userForm.querySelector("button").innerText = "Save User"
}
var showUsers = () => {
    var tbody = document.getElementById('tableID')
    tbody.innerText = ""
    users.forEach((item, i) => {
        var tr = document.createElement("tr")
        var td = document.createElement('td')
        td.innerText = item.name
        var td2 = document.createElement('td')
        td2.innerText = item.email
        var td3 = document.createElement('td')
        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn', 'btn-success', 'btn-sm')
        editBtn.addEventListener('click', () => { editUser(i) })
        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete user"
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', "ms-2")
        deleteBtn.addEventListener('click', () => {
            users.splice(i, 1)
            showUsers()
        })
        td3.append(editBtn)
        td3.append(deleteBtn)
        tr.append(td, td2, td3)
        tbody.append(tr)
    })
}