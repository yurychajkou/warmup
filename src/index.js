module.exports = function warmup(temperature) {
           
  if (temperature < Math.pow(10, 32)*1.416808){
    
   if (temperature > -273.15){ 
    
return Math.round(temperature*1.8+32)
};
  }    
};