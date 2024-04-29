$(document).ready(function() {
    // Function to send a message
    function sendMessage() {
        var message = $('.message-input').val().trim(); // Get the message from the textarea

        if (message !== '') { // Check if the message is not empty
            // Append the message to the messages container
            $('<div class="message message-personal">' + message + '</div>').appendTo('.messages-content').addClass('new');
            
            // Clear the textarea after sending the message
            $('.message-input').val('');
            
            // Update the scrollbar to scroll to the bottom
            updateScrollbar();
            
            // Simulate receiving a response after a delay 
            setTimeout(function() {
                receiveMessage("Thanks for your message!"); // Simulate receiving a response
            }, 1000); // Change the delay as needed
        }
    }

    // Function to receive a message
    function receiveMessage(message) {
        // Append the received message to the messages container
        $('<div class="message new">' + message + '</div>').appendTo('.messages-content').addClass('new');

        // Update the scrollbar to scroll to the bottom
        updateScrollbar();
    }

    // Event listener for the "Send" button click
    $('.message-submit').on('click', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        sendMessage(); // Call the sendMessage function when the button is clicked
    });

    // Event listener for pressing Enter in the textarea
    $('.message-input').on('keypress', function(e) {
        if (e.which === 13) { // Check if the Enter key is pressed
            e.preventDefault(); // Prevent adding a new line in the textarea
            sendMessage(); // Call the sendMessage function when Enter is pressed
        }
    });

    // Function to update the scrollbar
    function updateScrollbar() {
        $('.messages-content').mCustomScrollbar('update').mCustomScrollbar('scrollTo', 'bottom');
    }
});
