function makeControlsReadOnly() {
    console.log('makeControlsReadOnly');
    var allControls = Xrm.Page.getControl();
    var controlsLenght = allControls.length;
    for (var i = 0; i < controlsLenght; i++)
        {
            allControls[i].setDisabled(true);
         //   console.log(allControls[i]);
         }
     }

