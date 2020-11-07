$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.hydration-button').click(clickedHydrationButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name:"Kirby", 
      weight:"23", 
      happiness:"98", 
      hydration:"49"};
  
    function clickedTreatButton() {
      // Increase pet happiness
        pet_info.happiness++;
      // Increase pet weight
        pet_info.weight++;
      // Audio downloaded from https://www.101soundboards.com/boards/10585-kirby-sounds-super-smash-bros-melee
        var audio = new Audio ('https://cdn.glitch.com/734d6424-025d-4912-805b-bc1ef994f0a1%2Ftreat.mp3?v=1604636635839');
        audio.play();
      checkAndUpdatePetInfoInHtml();
      alert("Yum!!");
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
        pet_info.happiness++;
      // Decrease pet weight
        pet_info.weight--;
      // Audio downloaded from https://www.101soundboards.com/boards/10585-kirby-sounds-super-smash-bros-melee
        var audio = new Audio ('https://cdn.glitch.com/734d6424-025d-4912-805b-bc1ef994f0a1%2Fplay.mp3?v=1604636726584');
        audio.play();
      checkAndUpdatePetInfoInHtml();
      alert("Huahuaahuaha!!");
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
        pet_info.happiness--;
      // Decrease pet weight
        pet_info.weight--;
      // Audio downloaded from https://www.101soundboards.com/boards/10585-kirby-sounds-super-smash-bros-melee
        var audio = new Audio ('https://cdn.glitch.com/734d6424-025d-4912-805b-bc1ef994f0a1%2Fexercise.mp3?v=1604636541716');
        audio.play();
      checkAndUpdatePetInfoInHtml();
      alert("Let's take a break. I'm getting too skinny!");
    }

    function clickedHydrationButton() {
      // Increase hydration
        pet_info.hydration++;
      // Increase pet weight
        pet_info.weight++;
      // Audio downloaded from https://www.101soundboards.com/boards/10585-kirby-sounds-super-smash-bros-melee
        var audio = new Audio ('https://cdn.glitch.com/734d6424-025d-4912-805b-bc1ef994f0a1%2F12.mp3?v=1604635823787');
        audio.play();
      checkAndUpdatePetInfoInHtml();
      alert("I want a milkshake!!!");
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info.weight <= 0) pet_info.weight = 0;
    }
    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.hydration').text(pet_info['hydration']);
    }
  