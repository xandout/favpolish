chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    var title = tab.title;
    document.getElementById('title').innerHTML = title;
    document.getElementById('url').value = tablink;
});