$(document).ready(function() {
  $('.card').click(function() {
    $(this).find('.card-content').slideToggle('slow');
  });

  $('.tab-link').click(function(event) {
    event.preventDefault();
    
    // Remove active class from all tabs
    $('.tab-link').removeClass('active');
    // Add active class to clicked tab
    $(this).addClass('active');
    
    // Hide all tab content
    $('.card-group').removeClass('active');
    // Show the content of the clicked tab
    const tabId = $(this).attr('onclick').split("'")[1];
    $('#' + tabId).addClass('active');
  });

  // Set the default active tab and content
  $('.tab-link:first').addClass('active');
  $('.card-group:first').addClass('active');

});
