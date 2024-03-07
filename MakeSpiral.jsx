//@target illustrator

function main(){
    var doc = app.activeDocument;
    var spiralLayer = doc.layers.add();
    spiralLayer.name = "Spiral Archimedes";

    var dialog = new Window ("dialog", "Параметры спирали Архимеда");
    dialog.alignChildren = ["fill","top"];
    
    // Группа для радиуса
    var radiusGroup = dialog.add("group");
    radiusGroup.add("statictext", undefined, "Начальный радиус (px):");
    var radiusInput = radiusGroup.add("edittext", undefined, "100");
    radiusInput.characters = 10;

    // Группа для приращения радиуса
    var incrementGroup = dialog.add("group");
    incrementGroup.add("statictext", undefined, "Приращение радиуса:");
    var incrementInput = incrementGroup.add("edittext", undefined, "5");
    incrementInput.characters = 10;

    // Группа для количества витков
    var turnsGroup = dialog.add("group");
    turnsGroup.add("statictext", undefined, "Количество витков:");
    var turnsInput = turnsGroup.add("edittext", undefined, "3");
    turnsInput.characters = 10;

    // Группа для общего количества точек
    var pointsGroup = dialog.add("group");
    pointsGroup.add("statictext", undefined, "Общее количество точек:");
    var pointsInput = pointsGroup.add("edittext", undefined, "1000");
    pointsInput.characters = 10;

    var buttonGroup = dialog.add("group");
    buttonGroup.alignment = "right";
    buttonGroup.add("button", undefined, "OK", {name: "ok"});
    buttonGroup.add("button", undefined, "Отмена", {name: "cancel"});

    dialog.onClose = function() {
        var radius = parseFloat(radiusInput.text);
        var increment = parseFloat(incrementInput.text);
        var turns = parseInt(turnsInput.text);
        var points = parseInt(pointsInput.text);
        drawSpiral(radius, increment, turns, points);
    };

    dialog.show();
}

function drawSpiral(initialRadius, increment, turns, totalPoints) {
    var doc = app.activeDocument;
    var path = doc.pathItems.add();
    path.setEntirePath(createSpiralPath(initialRadius, increment, turns, totalPoints));
    path.stroked = true;
    path.strokeColor = new RGBColor(0, 0, 0);
}

function createSpiralPath(initialRadius, increment, turns, totalPoints) {
    var pathPoints = [];
    var angleStep = (Math.PI * 2 * turns) / totalPoints;

    for (var i = 0; i < totalPoints; i++) {
        var angle = i * angleStep;
        var r = initialRadius + (increment * i / totalPoints * turns);
        var x = r * Math.cos(angle);
        var y = r * Math.sin(angle);
        pathPoints.push([x, y]);
    }
    return pathPoints;
}

try {
    if (app.documents.length > 0) {
        main();
    } else {
        throw new Error("Нет открытых файлов");
    }
} catch(e) {
    alert(e.message, "Script Alert", true);
}
