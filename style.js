let text = document.getElementById('txt')
let box = document.getElementById('box')

txt.addEventListener('click',(event)=> {
 let arr = [ ];
 
(arr.push(txt.value))
 arr.forEach(function(entry) {
   console.log(entry);
});

});

