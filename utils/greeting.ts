export const getGreeting = () => {
  const hour = new Date().getHours();

  let greeting;
  if (hour > 18) greeting = 'Good evening';
  else if (hour >= 12) greeting = 'Good afternoon';
  else greeting = 'Good morning';
  
  return greeting;
}