const input=document.getElementById('search');
// const ul = document.getElementById('Task');
const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
fetch(url)
.then((res)=>res.json())
.then(function(data){
    var html = '<table id="mydiv">';
 html+= "<th>ID</th>"+"<th>NAME</th>"+"<th>EMAIL</th>"+"<th>COMMENTS</th><tr>";
 if(data){
    for(var i=0; i<data.length; i++) {
          data[i].name= (data.filter(x => x.id===i+1).map(x=>"Mr"+x.name));
          data[i].id= (data.filter(x => x.id===i+1).map(x=>x.id+"00"));
        html+= '<tr><td>'+ data[i].id+ '</td><td>'+ data[i].name +'</td><td>'+ data[i].email +'</td><td>'+data[i].body +'</td></tr>';
    };
     html += '</table>';
      document.getElementById('Task').innerHTML = html;
 }
})
.catch(function(error) {
    if(error)
      {
             console.log(error)
             var html = error;
             document.getElementById('Task').innerHTML = html;
      }
  });   
 function SEARCH()
 {
 fetch(url)
 .then((res)=>res.json())
 .then(function(data){
      data=data.filter(x => x.name===input.value);
     var html = '<table id="mydiv">';
  html+= "<th>ID</th>"+"<th>NAME</th>"+"<th>EMAIL</th>"+"<th>COMMENTS</th><tr>";
  if(data){
     for(var i=0; i<data.length; i++) {
           data[i].name= (data.map(x=>"Mr"+x.name));
           data[i].id= (data.map(x=>x.id+"00"));
         html+= '<tr><td>'+ data[i].id+ '</td><td>'+ data[i].name +'</td><td>'+ data[i].email +'</td><td>'+data[i].body +'</td></tr>';
     };
      html += '</table>';
       document.getElementById('Task').innerHTML = html;
  }
})
 .catch(function(error) {
     if(error)
       {
              console.log(error)
              var html = error;
              document.getElementById('Task').innerHTML = html;
       }
  });
      
 };
 