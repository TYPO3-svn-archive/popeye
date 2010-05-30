$(document).ready(function () {

    $('.toggler').toggle(
        function(){
            $($(this).attr('href')).slideDown('fast');
            return false;
        },
        function(){
            $($(this).attr('href')).slideUp('fast');
            return false;
        }
    );
    
    $('.closer').click(
        function(){
            $($(this).attr('href')).slideUp('fast');
            return false;
        }
    );
    
    if(_gat) {
        var pageTracker = _gat._getTracker("UA-266037-26");
        pageTracker._initData();
        pageTracker._trackPageview();
    }

});