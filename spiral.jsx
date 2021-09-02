//@target illustrator

try {
    
    if (app.documents.length > 0) {
        var x = 0;
    }
    else {
        throw new Error( "Нет открытых файлов" );
    }
}
catch(e) {
	alert( e.message, "Script Alert", true);
}