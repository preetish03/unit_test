fraction class
  const prompt=require('prompt-sync')();
function input()
{
  let a=parseInt(prompt("enter the first no"));
  let b=parseInt(prompt("enter the second no"));
  return[a,b];
}
function add(a,b)
{
  return(a+b);
}
function output(a,b,c)
{
  console.log("%d/%d is %d",a,b,c);
}
function main()
{
  let a,b;
  [a,b]=input();
  c=div(a,b);
  output(a,b,c)
}
main();
