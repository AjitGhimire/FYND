function add(a,  callback) {
    var result = a%2;
    callback(result);
  }
   
  function checkOddEven(result){
      var isEven = result % 2 == 0
      if(result ==0 ){
          console.log('Even');
      }
      else
      {
          console.log('Odd');
      }
  }
  add(7,  checkOddEven);