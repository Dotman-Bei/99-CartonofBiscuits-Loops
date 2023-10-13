for( var j=100; j>=3; j--){
    carton.innerHTML += `<p style="font-weight:bold; align:center; padding-top:20px;">${j-1}carton of biscuit on the wall,${j-1}carton of biscuit. <br>
    Take one down and pass it around,${j-2} carton of biscuit on the wall.<p>`

  
}

carton2.innerHTML += `<p style="font-weight:bold; align:center; padding-top:20px;"> 1 carton of biscuit on the wall, 1 carton of biscuit. <br>
Take one down and pass it around, no more carton of biscuit on the wall.</p>`
carton3.innerHTML += `<p style="font-weight:bold; align:center; padding-top:20px;">No more carton of biscuit on the wall, no more carton of biscuit. <br>
Go to the store and buy some more, 99 carton of biscuit on the wall.</p>`