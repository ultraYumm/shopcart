$(function() {
  
    $('#js-shopping-list-form').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      const newItem = $(this).find('#shopping-list-entry');
       newItem.val();
      
       $( 'ul').append(`<ul class="shopping-list">
      <li>
          <span class="shopping-item">${newItem.val()}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`)
        });
    
    $(document).on('click', '.shopping-item-delete', function(event) {
      $(this).closest("li").remove();
        });
    
        $(document).on('click', '.shopping-item-toggle', function(event) {
            $(this).closest("li").children('.shopping-item').toggleClass("shopping-item__checked");
        });
  
  
  });  
  