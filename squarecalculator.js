function square() {
  //1.Take the value of input box with id "n" and store it in a variable named "input". Wrap the input value in a Number() function
  var input=Number(document.getElementById("n").value);
  //2. To calculate square use this formula : input * input and assign it to a variable named "result"
  var result =input * input;
  //3. Display the result in an HTML element. Set the innerHTML of HTML elemnt with id "answer" to result.
  document.getElementById("answer").innerHTML=result;
}
