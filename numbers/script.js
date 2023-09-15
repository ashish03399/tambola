let random = 0

let container = []
const animDuration = 2;
var bingoNumberWords = ["Top of the house number 1", "Kaala dhan", "Goodness Me", "Knock at the door", "Symbol of congress", "Super sixer", "Colours of rainbow", "Big fat lady number 8", "Number of planets in solar system number 9", "A big fat hen", "1 and 1 eleven", "One dozen", "Unlucky for some lucky for some no. thirteen", "Valentine Day", "Yet to be missed", "Sweet sixteen", "Dancing Queen", "Voting age", "End of the teens", "Blind 20", "President salute", "Two little ducks", "You and me", "Two dozen", "Silver Jublee Number", "Republic Day", "Gateway to heaven", "Duck and its mate", "In your prime", "Its middle Age", "Time for fun", "Mouth Full", "All the 3s", "Dil mange more", "Flirty Husband", "Popular Number", "Mixed luck", "Oversize", "Watch your waistline", "Naughty 40", "Life's begun at 41", "Quit India Movement", "Pain in the knee", "All the fours", "Halfway there", "Up to tricks", "Year of Independence", "Four dozen", "Rise and shine", "Half a century, Golden Jublee", "Charity begins at 51", "Pack of cards", "Pack with a joker", "Pack with two jokers", "All the fives", "Pick up sticks", "Mutiny Year", "Time to retire", "Just retired", "Five dozen", "Bakers bun", "Click the two", "Click the three", "Catch the chor", "Old age pension", "Chakke pe chakka", "Made in heaven", "Saving grace", "Ulta Pulta", "Lucky blind", "Lucky bachelor", "Lucky couple", "A crutch and a flea", "Lucky chor", "Diamond Jublee", "Lucky six", "Two hockey sticks", "Heaven's gate", "lucky nine", "Gandhi's breakfast", "Corner shot", "Last of the two", "India wins Cricket World Cup", "Last of the chors", "Grandma", "Last six", "Grandpa", "Two fat ladies", "All but one", "Top of the house"]; 

function myFunction() {

    random = Math.floor(Math.random() * 90 + 1);

    if (container.includes(random)) {

        myFunction();

    } else {
        document.getElementById("demo").style = 'display: none';
        document.getElementById("demoAnim").style = "display: ''";
        const stAnim = setInterval(()=>{
            document.getElementById("demoAnim").innerHTML = Math.floor(Math.random() * 90 + 1)
        }, 100);
        setTimeout(function(){ 
            clearInterval(stAnim);
            document.getElementById("demo").style = "display: ''";
            document.getElementById("demoAnim").style = 'display: none';
            
            if (bingoNumberWords[random - 1]) {
                document.getElementById("bingoWords").innerHTML = (bingoNumberWords[random - 1]);
            } else {
                document.getElementById("bingoWords").innerHTML = "";
            }

            container.push(random);

            document.getElementById("demo").innerHTML = random;

            document.getElementById("n-"+ random).classList.add("last");

            document.getElementById("n-"+ random).classList.add("done");
                
            }, animDuration*1000);
    
        

        if(container.length == 86){
            alert("Housie !!!")
        }

    }

}

// document.getElementsByClassName("gen-btn").onclick = function() {removeLast()};

//show last/current number in red
function removeLast(){
    let lastnum = container.length-2;
    document.getElementById("n-"+ container[lastnum]).classList.remove("last");
}


function reloadPage(){
    window.location.reload();
 }
