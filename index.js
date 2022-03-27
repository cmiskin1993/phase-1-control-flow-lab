function scuberGreetingForFeet(feet) {
  if (feet <= 400){
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
  return "I will gladly take your thirty bucks.";
  }else{
    return "No can do.";
  }
}


function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip){
if (tip = 'generous'){
  return "Thank you so much."; // if the tip is generous
} else if (tip = 'not as generous') {
  return "Thank you."; //if the tip is not as generous
}else{
  return 'Bye.';
  }
}


function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}