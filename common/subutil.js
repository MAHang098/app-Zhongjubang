var sub = function (val) {

  if (val.length == 0 || val == undefined) {

    return;

  }

  if (val.length > 17) {

    return val.substring(0, 12) + "...";

  } else {

    return val;

  }

}
// sub2
var sub2 = function (val) {

  if (val.length == 0 || val == undefined) {

    return;

  }

  if (val.length > 10) {

    return val.substring(0, 8) + "...";

  } else {

    return val;

  }

}

export default {  
    sub,  
    sub2,  
} 