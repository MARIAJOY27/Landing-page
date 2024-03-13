class Landing {
    //property
    dataBase = {
       "Milan":{username:'Milan',password:'Milan123'},
       "Manu":{username:'Manu',password:'Manu123'},
       "Anu":{username:'Anu',password:'Anu123'},
       "Manuel":{username:'Manuel',password:'Manuel123'},
    }
    //method
    save(){
        if(this.dataBase){
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
        }
    }
    //get data
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("dataBase"))
    }
    //register method
    register(){
        this.getData()
        console.log('inside register function');
        let user = regUser.value
        let pswd = regPswd.value
        console.log(user,pswd);

        if(user=="" || pswd==""){
            alert('Please fill the form completely')
        }
        else{
            if(user in this.dataBase){
                alert('User already exists')
            }
            else{
                this.dataBase[user] = {username:user,password:pswd}
                this.save()
                alert('User added successfully')
                //for navigation
                window.location = "login.html"
            }
        }
    }

    //login
    login(){
        let luser = loginUser.value
        let lpswd = loginPswd.value
        console.log(luser, lpswd);
        this.getData()

        if(luser=="" || lpswd==""){
            alert('Please fill the form completely')
        }
        else{
            if(luser in this.dataBase && this.dataBase!==null){
                if(this.dataBase[luser].password==lpswd){
                    alert('Login successful')
                    localStorage.setItem("user",luser)
                    window.location='home.html'
                }
                else{
                    alert('Wrong username or password')
                }
            }
            else{
                alert('Wrong username or password')
            }
        }
    }
}

//object

const obj = new Landing()
// obj.save()
obj.getData()