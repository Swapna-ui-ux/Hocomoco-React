$(function(){
	$("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 100,
        labels: {
            finish: "Submit",
            next: "Next",
            //previous: "Backward"
        }
    });
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
})


//

(function($) {

    "use strict";
    
    var sdm = function() {
    
        var o = this; 
    
        $(document).ready(function() {
    
            o.initialize();
    
        });
    
    };
    
    var p = sdm.prototype;
    
    p.initialize = function() {
    
      this._initChartWizard();
    
    };
    
    
    
     
    
    p._initChartWizard = function () {
    
      var o = this;
    
      $('#chartwizard').bootstrapWizard({
    
        onTabShow: function (tab, navigation, index) {
    
          o._handleTabShow(tab, navigation, index, $('#chartwizard'));
    
          o._nextTab(o);
    
        }
    
      });
    
    
    
      $('#chartwizard').bootstrapWizard({ 'nextSelector': '.chartOption' });
    
    
    
    }
    
    
    
    p._handleTabShow = function (tab, navigation, index, wizard) {
    
      var total = navigation.find('li').length;
    
      var current = index + 0;
    
      var percent = (current / (total - 1)) * 100;
    
      var percentWidth = 100 - (100 / total) + '%';
    
    
    
      navigation.find('li').removeClass('done');
    
      navigation.find('li.active').prevAll().addClass('done');
    
    
    
      wizard.find('.progress-bar').css({ width: percent + '%' });
    
      $('.form-wizard-horizontal').find('.progress').css({ 'width': percentWidth });
    
    }
    
    
    
    p._nextTab = function(wizard) {
    
      $('.nextT').click(function(){
    
        wizard('next');
    
      });
    
    }
    
    
    
    window.boostbox = window.boostbox || {};
    
    window.boostbox.sdm = new sdm;
    
    }(jQuery)); 