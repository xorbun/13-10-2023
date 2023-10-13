
const getgames= function()
{
    fetch("https://striveschool-api.herokuapp.com/api/product/", 
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
        console.log("ok")
        return res.json()
    }
    else
    {
      console.log("errore")
    }
})
.then((data)=>
{
    console.log("data",data)
    const row = document.getElementById("gamesrow")
    data.forEach((game)=>
     
    {
       
        const col=document.createElement("div")
        col.classList.add("col")
        const card= document.createElement("div")
        card.classList.add("card", "mb-3", "p-3", "bg-warning-subtle")
        const card2=document.createElement("div")
        card2.classList.add("card-body")
        const newimg=document.createElement("img")
        newimg.setAttribute("src",game.imageUrl )
        newimg.classList.add("img-fluid")
        const newtitle=document.createElement("p")
        const newprice=document.createElement("p")
        newtitle.innerText=game.name
        newprice.innerText="prezzo: "+ game.price + "$"
        const details=document.createElement("button")
        details.classList.add("btn", "bg-light")
         details.innerHTML=`<a href="backoffice.html?eventId=${game._id
        }">dettagli</a>`
        
        
        
        card2.appendChild(newimg)
        card2.appendChild(newtitle)
        card2.appendChild(newprice)
        card2.appendChild(details)
        card.appendChild(card2)
        col.appendChild(card)
        row.appendChild(col)
    });
})
.catch((err)=>
{
    console.log(err)
})
}
getgames()