
            list = ["q1", "q2", "q3", "q4"]
            names = ["China Chopsticks", "South Side Luigi's", "Indian Express", "Mexican Mama"]
            o = ["o1", "o2", "o3"]
            adv = false
            shop = ""

            function next(shop){
                rests = document.getElementsByClassName("rest")
                for(i=0;i<list.length;i++){
                    if(list[i]!=shop){
                        document.getElementById(list[i]).style.width = "0%"
                        rests[i].innerHTML = ""
                    } else {
                        document.getElementById(list[i]).style.width = "99%"
                        document.getElementById(list[i]).style.opacity = "1"
                        document.getElementById(list[i]).style.backgroundSize = "cover"
                    }
                }

                document.getElementById("h").innerHTML = ""
                document.getElementById("h").style.opacity = "0"

                if (shop!=""){
                    document.getElementById("form").style.opacity="1"
                    document.getElementById("formh").innerHTML = "Menu"
                    document.getElementById("formh").style.fontSize = "30px"
                    document.getElementById("form").style.opacity="1"
                    rests = document.getElementsByClassName("rest")
                    
                    for(i=0;i<rests.length;i++){
                        rests[i].style.padding="0.5%"
                        rests[i].style.fontSize = "40px"
                    }
                    adv = true
                }
            }

            function options(newos){
                for(i=0; i<o.length; i++){
                    document.getElementById(o[i]).innerHTML = newos[i]
                }
            }

            function chop(){
                shop = "q1"
                next(shop)
                options(["Dumpling", "Chow Mein", "Tofu"])
            }

            function luigi(){
                shop = "q2"
                next(shop)
                options(["Pizza", "Lasagna", "Pasta"])
            }

            function iexp(){
                shop = "q3"
                next(shop)
                options(["Dosa", "Samosa", "Biryani"])
            }

            function mex(){
                shop = "q4"
                next(shop)
                options(["Taco", "Nacho", "Guacamole"])
            }

            function login(text){
                next("")
                lf = document.getElementsByClassName("loginform")
                for(i=0;i<lf.length;i++){
                    lf[i].style.opacity="1"
                }

                document.getElementById("form").style.opacity="0"
                document.getElementById("formh").innerHTML = ""
                document.getElementById("formh").style.fontSize = "0px"
           
                document.getElementById("navbar").style.display = "none"
                
                document.getElementById("hl").innerHTML = text + " to website"
                document.getElementById("hl").style.fontSize = "40px"
                document.getElementById("u1").innerHTML = "Username"
                document.getElementById("p1").innerHTML = "Password"
                document.getElementById("lsubmit").innerHTML = text
            }

            function prog(){
                console.log(adv)
                console.log(shop)
                
                document.getElementById("hl").innerHTML= ""
                document.getElementById("hl").style.fontSize = "0px"
                document.getElementById("u1").innerHTML = ""
                document.getElementById("u1").style.opacity = "0"
                document.getElementById("p1").innerHTML = ""
                document.getElementById("p1").style.opacity = "0"
                document.getElementById("lsubmit").innerHTML = ""
                document.getElementById("lsubmit").style.opacity = "0"
                document.getElementById("err1").innerHTML = ""
                document.getElementById("err1").style.opacity = "0"
                document.getElementById("username").style.opacity = "0"
                document.getElementById("password").style.opacity = "0"

                document.getElementById("navbar").style.display = "block"
                if(adv){    
                    s = document.getElementsByClassName("rest")
                    for(i=0; i<s.length; i++){
                        console.log(names[i])
                        s[i].innerHTML = names[i]
                        s[i].style.fontSize = "30px"
                        s[i].style.padding = "2%"
                    }
                
                    if(shop=="q1")
                        chop()
                    if(shop=="q2")
                        luigi()
                    if(shop=="q3")
                        iexp()
                    if(shop=="q4")
                        mex()
                } else {
                    document.getElementById("h").innerHTML = "Pick a restaurant"
                    document.getElementById("h").style.opacity = "1"
                    document.getElementById("logreg").style.height = "1"

                    rests = document.getElementsByClassName("rest")
                    for(i=0;i<rests.length;i++){
                        rests[i].style.padding="2%"
                        rests[i].style.fontSize = "30px"
                        rests[i].innerHTML = names[i]
                    }
                    for(i=0;i<list.length;i++){
                        document.getElementById(list[i]).style.opacity="1"
                        console.log(" ")
                    }
                }
                document.getElementById('login').innerHTML=""
                document.getElementById('login').style.opacity="0"
                document.getElementById('register').innerHTML=""
                document.getElementById('register').style.opacity="0"
                document.getElementById('account').innerHTML = "👤 " + document.getElementById("username").value
            }

            function lsubmit(){
                u = document.getElementById("username").value.replaceAll("\\s+","")
                p = document.getElementById("password").value.replaceAll("\\s+","")
                if(u!="" && p!=""){
                    document.getElementById("err1").style.color = "rgb(65, 216, 12)"
                    if(document.getElementById("hl").innerHTML[0]=="L"){
                        document.getElementById("err1").innerHTML = "Login Successful!"
                    } else if (document.getElementById("hl").innerHTML[0]=="R"){
                        document.getElementById("err1").innerHTML = "Registration Successful!"
                    }
                    setTimeout(prog, 1000)
                } else if(u=="" && p!="") {
                    document.getElementById("err1").innerHTML = "Invalid Username"
                } else if(u!="" && p=="") {
                    document.getElementById("err1").innerHTML = "Invalid Password"
                } else {
                    document.getElementById("err1").innerHTML = "Invalid Username and Password"
                }
            }
