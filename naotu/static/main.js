kodReady.push(function(){
    kodApp.add({
        name:"naotu",
        title:"{{LNG.naotu.meta.title}}",
        ext:"{{config.fileExt}}",
        sort:"{{config.fileSort}}",
        icon:'{{pluginHost}}static/images/icon.png',
        callback:function(path,ext){
            var url = '{{pluginHost}}static/kityminder/dist/index.html?path='+core.path2url(path);
            if('window' == "{{config.openWith}}"){
                window.open(url);
            }else{
                core.openDialog(url,core.icon(ext),htmlEncode(core.pathThis(path)));
            }
        }
    });
});
