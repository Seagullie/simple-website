        function initUI(){
            $(".parallax").parallax()
            $(".tabs").tabs()
            $(".datepicker").datepicker()
            $(".materialboxed").materialbox()
            $(".scrollspy").scrollSpy({"scrollOffset": 0})
        }

        $("document").ready(initUI)