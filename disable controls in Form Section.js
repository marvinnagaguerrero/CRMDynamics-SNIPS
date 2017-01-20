function sectionObject(tabNumber, sectionNumber) {
    var section = Xrm.Page.ui.tabs.get(tabNumber).sections.get(sectionNumber);

    this.setDisabled = function (disablestatus) {
        var controls = section.controls.get();
        var controlsLenght = controls.length;
        for (var i = 0; i < controlsLenght; i++) {
            controls[i].setDisabled(disablestatus)
            console.log(controls[i]);
        }
    };

//    this.clearFields = function () {
//        var controls = section.controls.get();
//        var controlsLenght = controls.length;
//        for (var i = 0; i < controlsLenght; i++) {
//            controls[i].getAttribute().setValue(null);
//        }
//    };

}

function setControlLock()
{
var section=new sectionObject(0,1);
section.setDisabled(true);

console.log("setting control lock");
}