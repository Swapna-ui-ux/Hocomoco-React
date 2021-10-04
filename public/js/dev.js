
$(document).ready(function() {
    $('.second-button').on('click', function() {
        $('.animated-icon2').toggleClass('open');
    });
});


// 
    $(document).ready(function() {
        $('#depts').multiselect({
            numberDisplayed: 1,
            required: true,
            includeSelectAllOption: true,
            allSelectedText: 'All Topics selected',
            nonSelectedText: 'No Topics selected',
            selectAllValue: 'all',
            selectAllText: 'Select all',
            unselectAllText: 'Unselect all',
            onSelectAll: function(checked) {
                var all = $('#depts ~ .btn-group .dropdown-menu .multiselect-all .checkbox');
                all
                // get all child nodes including text and comment
                    .contents()
                    // iterate and filter out elements
                    .filter(function() {
                        // check node is text and non-empty
                        return this.nodeType === 3 && this.textContent.trim().length;
                        // replace it with new text
                    }).replaceWith(checked ? this.unselectAllText : this.selectAllText);
            },
            onChange: function() {
                var select = $(this.$select[0]);
                var dropdown = $(this.$ul[0]);
                var options = select.find('option').length;
                var selected = select.find('option:selected').length;
                var all = dropdown.find('.multiselect-all .checkbox');
                all
                // get all child nodes including text and comment
                    .contents()
                    // iterate and filter out elements
                    .filter(function() {
                        // check node is text and non-empty
                        return this.nodeType === 3 && this.textContent.trim().length;
                        // replace it with new text
                    }).replaceWith(options === selected ? this.options.unselectAllText : this.options.selectAllText);
            }
        });
        $("#form").submit(function(e) {
            e.preventDefault();
            alert($(this).serialize());
        });
    });

    //
  
    $(document).ready(function() {
        $(".multiselect-container").append("<button type='button' class='theme-btn-small dropdown-btn m-l-10'>OK</button>");
        //$(".dropdown-btn").hide();
        //alert("Hello");
        if($("#depts").is(':checked')) {
            alert("World");
        }
        $("#depts").click(function() {
            $(".dropdown-btn").show();
        });
    });
 

    // 
   
   // PORTFOLIO SCRIPT //

    $(document).ready(function () {
        size_li = $(".portfolio_Div .masonry-item").length;
        x=5;
        $('.portfolio_Div .masonry-item:lt('+x+')').length;
        $('.loadMore').click(function () {
            x= (x+5 <= size_li) ? x+5 : size_li;
            $('.portfolio_Div .masonry-item:lt('+x+')').length;
        });
        $('.showLess').click(function () {
            x=(x-5>0) ? 5 : x-5;
            $('.portfolio_Div .masonry-item').not(':lt('+x+')').hide();
        });
    });

    

    // BLOG SCRIPT //

    $('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data
        })
      });
      
      var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all"
        }
      })
   
      // Project Details Script //

      $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            arrows: true,
            dots: false,
            pauseOnHover: false,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },  {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });

 
    

