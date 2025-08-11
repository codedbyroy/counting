let count=document.getElementById("points")
let result=document.getElementById("nums")
let add=0
 count.textContent=add
let pol=0
result.textContent=pol
function plus1(){
    add +=1
    count.textContent=add
}
function plus2(){
    add +=2
    count.textContent=add
    
}
function plus3(){
     add +=3
    count.textContent=add
}
function nums1(){
    pol +=1
    result.textContent=pol
}
function nums2(){
    pol +=2
    result.textContent=pol
}
function nums3(){
   pol +=3
    result.textContent=pol
}
function save(){
    add=0
    count.textContent=add
    pol=0
    result.textContent=pol
}