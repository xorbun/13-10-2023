const formreference=document.getElementById("form")
const address=new URLSearchParams(location.search)
const gameid=address.get("eventId")
console.log(gameid)
if(gameid)
{
    fetch("https://striveschool-api.herokuapp.com/api/product/" + gameid, 
    {
        headers: 
        {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjU1ZDEzOWM0MzAwMTg4MTQ1NmMiLCJpYXQiOjE2OTcxODMwNjksImV4cCI6MTY5ODM5MjY2OX0.ygj0I_k5nZpCuJIs4mNuO_uu2LkBmRy0_D9CD40zH4s"
        }  
    })
    
        .then((res)=>
        {
            if(res.ok)
            {
                return res.json()
            }
            else
            {
                console.log("orrore")
            }
        })
        .then((gamemod)=>
        {
            console.log(gamemod)
            const nameinput=document.getElementById("name")
            const descinput=document.getElementById("description")
            const brandinput=document.getElementById("brand")
            const imginput=document.getElementById("imageUrl")
            const priceinput=document.getElementById("price")
            const deleter=document.createElement("button")
            deleter.classList.add("btn", "btn-danger")
            deleter.innerText="Cancella"
            formreference.appendChild(deleter)
            nameinput.value=gamemod.name
            descinput.value=gamemod.description
            brandinput.value=gamemod.brand
            imginput.value=gamemod.imageUrl
            priceinput.value=gamemod.price

            deleter.addEventListener("click",function(e)
            {
                e.preventDefault()
                fetch("https://striveschool-api.herokuapp.com/api/product/" + gameid, 
                    {
                        method: "DELETE",
                        body:JSON.stringify(gamemod),
                        headers: 
                        {
                            "Content-Type":"application/json",
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjU1ZDEzOWM0MzAwMTg4MTQ1NmMiLCJpYXQiOjE2OTcxODMwNjksImV4cCI6MTY5ODM5MjY2OX0.ygj0I_k5nZpCuJIs4mNuO_uu2LkBmRy0_D9CD40zH4s"
                        }
                    })
                    .then((res)=>
    {
        if(res.ok)
        {
            alert("prodotto cancellato")

        }
        else
        {
            console.log("errore")
        }
    })
    .catch((err)=>
    {
        console.log(err)
    })
            })
        })
        .catch((err)=>
        {
            console.log(err)
        })
    
}
const butt=document.getElementById("sub")
if(gameid)
{
    butt.innerText="Modifica"
}
else
{
    butt.innerText="Invia"
}
formreference.addEventListener("submit",function(e)
{
    e.preventDefault()
    
    const nameinput=document.getElementById("name")
    const descinput=document.getElementById("description")
    const brandinput=document.getElementById("brand")
    const imginput=document.getElementById("imageUrl")
    const priceinput=document.getElementById("price")
    const button=document.getElementById("sub")
    const newproduct =
    {
        name: nameinput.value,
        description: descinput.value,
        brand: brandinput.value,
        imageUrl: imginput.value,
        price:priceinput.value,
    }
    
    let methodtouse=""
    let urltouse=""
    if (gameid)
    {
        urltouse="https://striveschool-api.herokuapp.com/api/product/" +gameid
        methodtouse="PUT"
    }
    else
    {
        urltouse="https://striveschool-api.herokuapp.com/api/product/"
        methodtouse="POST"
    } 
    fetch(urltouse, 
    {
        method: methodtouse,
        body:JSON.stringify(newproduct),
        headers: 
        {
            "Content-Type":"application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjU1ZDEzOWM0MzAwMTg4MTQ1NmMiLCJpYXQiOjE2OTcxODMwNjksImV4cCI6MTY5ODM5MjY2OX0.ygj0I_k5nZpCuJIs4mNuO_uu2LkBmRy0_D9CD40zH4s"
        }
    })
    .then((res)=>
    {
        if(res.ok)
        {
            alert("prodotto inserito in archivio")
        }
        else
        {
            console.log("errore")
        }
    })
    .catch((err)=>
    {
        console.log(err)
    })

    
})


