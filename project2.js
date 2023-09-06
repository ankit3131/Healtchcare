const btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
  debugger;
  console.log('click');

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height) )
  {
    result.innerHTML = "Height is Not Number";
  
  }
  if(weight === '' || weight < 0 || isNaN(weight) )
  {
    
    result.innerHTMl = 'weight is not number';
  
  }

  // condtion use BMI Number check

else {
  const BMI = (weight / ((height * height) / 10000)).toFixed(2);  //formula checked 
  // result.innerHTML = `<span>${BMI}</span>`;     //result checked
  if(BMI < 18.6)
  {
    result.innerHTML = `<span>${BMI}</span>`;
    result.style.color = 'orange'
   }
 else if(BMI >= 18.6 && BMI <= 24.9) {
  result.innerHTML = `<span>${BMI}</span>`;
  result.style.color = 'green'
  result.style.fontsize= '25px';
 }
 
 else {
  result.innerHTML = `<span>${BMI}</span>`;
  result.style.color = 'red'
  result.style.fontsize= '25px';
 }
 

 ////Condtion check use and print value

const Checkeds = document.querySelectorAll('.checked');

Checkeds.forEach(function (element)
{
if(BMI < 18.6) {
  debugger;
  element.textContent = 'Under Weight = 18.6 and 24.9';
}
else if (BMI >= 18.6 && BMI <= 24.9) {
  debugger;
  console.log('chekced1');
  element.textContent = 'Normal Weight  = 18.6 and 24.9';
}
else {
  element.textContent = 'Over Weight = 30';
}

});
e.preventDefault();
}
});