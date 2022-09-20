let obj = {"name":{"first":"Robert","middle":"","last":"Smith"},"age":25,"DOB":"-","hobbies":["running","coding","-"],"education":{"highschool":"N\/A","college":"Yale"}};

function recurse(resp) {
  let data;

  
  for (var x in resp) {
    data = resp[x]

    if (data === 'null' || data == 'N/A' || data === null || data === '-' ||  data === '' || typeof data === 'undefined' || (data instanceof Object && Object.keys(data).length == 0)) {
      delete resp[x];
    }

    if (data instanceof Object) {
      data = recurse(data);
    }
  }

  return resp;
}

let newobj = recurse(obj)
console.log(newobj)
