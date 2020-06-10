function getInput(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(message);
}

getInput(0)
getInput(100)
getInput(5)