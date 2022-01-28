// Declaring the variables
let heads = 0
let tails = 0

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
    document.getElementById('flip').addEventListener('click', () => {
        // Determine result using Math.random() which returns a value between 0 and 1
        // Therefore, it has a 50% chance to be below 0.5
        let flippedcoin = Math.random() < 0.5

        // Take different actions for heads vs tails flipped
        if (flippedcoin) {
            // Display image and message as heads
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            // Add one to the count of number of heads flipped
            heads += 1
        }
        else {
            // Display image and message as tails
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            // Add one to the count of number of tails flipped
            tails += 1
        }

        // Update the scoreboard

        // Calculate total number of rolls
        let total = heads + tails

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((heads / total) * 100)
            percentTails = Math.round((tails / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the heads and tails values to zero
        heads = 0
        tails = 0

        // Update the message to the user
        document.getElementById('message').textContent = 'Time to flip the coin again!'

        // Update the scoreboard
        
        // Calculate total number of rolls
        let total = heads + tails

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((heads/ total) * 100)
            percentTails = Math.round((tails / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})