function projectSwitcher(tabs, time){
    var i = 0,
        $activeTab;
    setInterval(function() {
        $activeTab = tabs.eq( (i + 1) % tabs.length);
        $activeTab.find("a").tab("show");
        i++;
    }, time);
}

$(document).ready(function(){
    projectSwitcher($("#feature-tabs").find("li"), 5000);
    projectSwitcher($("#entertainment-tabs").find("li"), 600000);
});