var inputs1 = [];
var inputs2 = [];

function get_para_1() {
    for(var i = 1; i <= 6; i++) {
        inputs1.push(document.getElementById("input_para_1_" + i).value);
        document.getElementById("formed_paragraph_1").innerHTML = "<h4>" + inputs1.join(". ") + "</h4>";
    }
}

function get_para_2() {
    for(var j = 1; j <= 6; j++) {
        inputs2.push(document.getElementById("input_para_2_" + j).value);
        document.getElementById("formed_paragraph_2").innerHTML = "<h4>" + inputs2.join(". ") + "</h4>";
    }
}