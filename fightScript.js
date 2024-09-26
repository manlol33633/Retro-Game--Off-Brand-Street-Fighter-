let ryuHealth = 100;
let kenHealth = 100;
let ryuXPos = 155;
let kenXPos = 155;

function updateHealthBar(player, health) {
    const healthBar = document.getElementById(`player${player}-health`);
    healthBar.style.width = `${health}%`;

    if (health <= 25) {
        healthBar.style.backgroundColor = 'red';
    } else if (health <= 50) {
        healthBar.style.backgroundColor = 'orange';
    } else {
        healthBar.style.backgroundColor = '#4caf50'; // Default green color
    }
}

this.addEventListener('keypress', event => {
    //left and right movement
    if (event.code == "KeyA") {
      //move ryu left
      ryuXPos += 5;
      document.getElementById('ryu_fight').style.right=ryuXPos + "px";
    }

    if (event.code == "KeyD") {
        //move ryu right
        ryuXPos -= 5;
        document.getElementById('ryu_fight').style.right=ryuXPos + "px";
    }

    if (event.code == "KeyJ") {
        //move ken left
        kenXPos += 5;
        document.getElementById('ken_fight').style.right=kenXPos + "px";
    }

    if (event.code == "KeyL") {
        //move ken right
        kenXPos -= 5;
        document.getElementById('ken_fight').style.right=kenXPos + "px";
    }

    //attacking logic, very simple
    if (event.code == "KeyX") {
        if (ryuXPos + kenXPos >= 0) {
            //ryu light attack, decrease ken health by 5
        kenHealth -= 5;
        if (kenHealth < 0) {kenHealth = 0;}
        updateHealthBar(2, kenHealth);
        console.log("Ken's Health: " + kenHealth);
        }
    }

    if (event.code == "KeyC") {
        if (ryuXPos + kenXPos >= 0) {
        //ryu heavy attack, decrease ken health by 10
        kenHealth -= 10;
        if (kenHealth < 0) {kenHealth = 0;}
        updateHealthBar(2, kenHealth);
        console.log("Ken's Health: " + kenHealth);
        }
    }
    
    if (event.code == "KeyN") {
        if (ryuXPos + kenXPos >= 0) {
        //ryu light attack, decrease ken health by 5
        ryuHealth -= 5;
        if (ryuHealth < 0) {ryuHealth = 0;}
        updateHealthBar(1, ryuHealth);
        console.log("Ryu's Health: " + ryuHealth);
        }
    }

    if (event.code == "KeyM") {
        if (ryuXPos + kenXPos >= 0) {
        //ryu heavy attack, decrease ken health by 10
        ryuHealth -= 10;
        if (ryuHealth < 0) {ryuHealth = 0;}
        updateHealthBar(1, ryuHealth);
        console.log("Ryu's Health: " + ryuHealth);
        }
    }
  })