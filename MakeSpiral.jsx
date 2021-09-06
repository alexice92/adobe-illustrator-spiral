//@target illustrator
var radius_default = 50;
//var x_default = 0;
//var y_default = 0;
//
//var radius = radius_default;
//var x = x_default;
//var y = y_default;
//
try {
    
    if (app.documents.length > 0) {

        main();
    }
    else {
        throw new Error( "Нет открытых файлов" );
    }
}
catch(e) {
	alert( e.message, "Script Alert", true);
}

//res = "dialog {info: Panel {orientation: "column", text: "Personal info", name: Group {orientation: "row", s: StaticText {text: "Name"}, e: EditText{characters: 30},} addr: Group {orientation: "row", s: StaticText {text: "Street/City"}, e: EditText{characters: 30}}}, buttons: Group {orientation: "row", okBtn{text: "OK", properties: {name: "ok"}}, cancelBtn{text: "Cancel", properties: {name: "cancel"}}}}";
    
//win = new Window(res);
//win.show();

function main(){
    //alert( "Успех" );
    var cstmUI = new Window ("dialog", "Параметры");
    //cstmUI.orientation = "column"; 
    cstmUI.alignChildren = ["center","center"];
    
    // CSTMPNL
    // =======
    var cstmPnl = cstmUI.add("group", undefined, "cstmPnl");
    cstmPnl.orientation = "row"; 
    cstmPnl.alignChildren = ["center","center"];
    
    // CSTMPNL1
    // ======== 
    var cstmPnl1 = cstmPnl.add("group", undefined, "cstmPnl1");
    cstmPnl1.orientation = "column";
    cstmPnl1.alignChildren = ["left","center"]; 
    cstmPnl1.spacing = 18;
    
    var cstmPnl1Name1 = cstmPnl1.add("statictext", undefined, {name: "cstmPnl1Name1"});
    cstmPnl1Name1.text = "Радиус";
    
    var cstmPnl1Name2 = cstmPnl1.add("statictext", undefined, {name: "cstmPnl1Name2"});
    cstmPnl1Name2.text = "Координата х";
    
    var cstmPnl1Name3 = cstmPnl1.add("statictext", undefined, {name: "cstmPnl1Name3"});
    cstmPnl1Name3.text = "Координата у";
    
    // CSTMPNL2
    // ========
    var cstmPnl2 = cstmPnl.add("group", undefined, "cstmPnl2");
    cstmPnl2.orientation = "column";
    cstmPnl2.alignChildren = ["center","center"];
    
    var edittext1 = cstmPnl2.add('edittext {properties: {name: "edittext1"}}');
    edittext1.text = "20"; 
    edittext1.preferredSize.width = 45;
    
    var edittext2 = cstmPnl2.add('edittext {properties: {name: "edittext2"}}');
    edittext2.text = "20"; 
    edittext2.preferredSize.width = 45;
    
    var edittext3 = cstmPnl2.add('edittext {properties: {name: "edittext3"}}');
    edittext3.text = "20"; 
    edittext3.preferredSize.width = 45;
    
    
    // CSTMPNL3
    // =========
    var cstmPnl3 = cstmPnl.add("group", undefined, "cstmPnl3");
    cstmPnl3.orientation = "column";
    cstmPnl3.alignChildren = ["left","center"]; 
    cstmPnl3.spacing = 18;
    
    var cstmPnl3Name1 = cstmPnl3.add("statictext", undefined, {name: "cstmPnl3Name1"});
    cstmPnl3Name1.text = "px";
    
    var cstmPnl3Name2 = cstmPnl3.add("statictext", undefined, {name: "cstmPnl3Name2"});
    cstmPnl3Name2.text = "px";
    
    var cstmPnl3Name3 = cstmPnl3.add("statictext", undefined, {name: "cstmPnl3Name3"});
    cstmPnl3Name3.text = "px";
    

    // BTMSPNL
    // =======
    var btnPnl = cstmUI.add("group", undefined, "Buttons");
    btnPnl.orientation = "row";
    var buildBtn1 = btnPnl.add ("button", undefined, "OK");
    var buildBtn2 = btnPnl.add ("button", undefined, "Cancel");
    
    buildBtn1.onClick = actionCanceled;
    buildBtn2.onClick = respond;
    
    cstmUI.show ();


    
    
//myWindow.orientation = "row";
//myWindow.add ("statictext", undefined, "Имя:");
//var myText = myWindow.add ("edittext", undefined, "Петр");
//myText.characters = 30;
//myText.active = true;
//myWindow.add ("button", undefined, "OK");
//myWindow.add ("button", undefined, "Cancel");
//myWindow.show ();
    //var cstmUI = new Window('dialog', "Set Parameters:");
	//cstmUI.location = [200,200];
    //cstmUI.btnPnl.buildBtn1= cstmUI.btnPnl.add('button',[15,15,115,35], 'Cancel', {name:'cancel'}); 
	//cstmUI.btnPnl.buildBtn2 = cstmUI.btnPnl.add('button', [125,15,225,35], 'OK', {name:'ok'}); 
	//cstmUI.btnPnl.buildBtn1.onClick = actionCanceled;
    //cstmUI.btnPnl.buildBtn2.onClick = respond;
    //cstmUI.show();
}

//function circle() {
//    var x =2;
//}
function respond() {
    alert( "Успех1" );
    //cstmUI.close();
}
function actionCanceled() { 
	alert( "Успех2" );
	//dlg.close();
}