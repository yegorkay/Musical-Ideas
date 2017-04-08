$(".option").one("click", function() {
    $(this).toggleClass("active");
});

$(".option").hover(function() {
    $(this).addClass("highlightedButton");
    }, function() {
    $(this).removeClass("highlightedButton");
});

$("#tempo").one("click", function() {
    var tempo = ("Tempo: " + Math.floor(Math.random() * (200-80) + 80) + " BPM");
    $('#tempo').html(tempo);
});

$("#songDuration").one("click", function() {
    var minuteArray = ['3', '4', '5'];
    var secondArray = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
    var minute = minuteArray[Math.floor(Math.random() * minuteArray.length)];
    var second = secondArray[Math.floor(Math.random() * secondArray.length)];
    var songDuration = ("Song Duration: " + minute + ":" + second)
    $('#songDuration').html(songDuration);
});

$("#emotion").one("click", function() {
    var emotionArray = ['Anger', 'Happiness', 'Surprise', 'Disgust', 'Fear', 'Sadness'];
    var emotionCalc = emotionArray[Math.floor(Math.random() * emotionArray.length)];
    var emotion = ("Emotion: " + emotionCalc);
    $("#emotion").html(emotion);
});

$("#timeSignature").one("click", function() {
    var timeSignatureArray = ['4/4', '3/4', '2/4', '2/2', '3/8', '6/8', '9/8', '12/8', '5/4', '6/4'];
    var timeSignature = timeSignatureArray[Math.floor(Math.random() * timeSignatureArray.length)];
    var tS = ("Time Signature: " + timeSignature);
    $('#timeSignature').html(tS);
});

$("#key").one("click", function(){
    var keyArray = ['C Major', 'G Major', 'D Major', 'A Major', 'E Major','B Major',
        			'Cb Major', 'F# Major', 'Gb Major', 'Db Major', 'C# Major',
        			'Ab Major', 'Eb Major', 'Bb Major', 'F Major', 'A Minor', 'E Minor',
        			'B Minor','F# Minor', 'C# Minor', 'G# Minor', 'Ab Minor', 'D# Minor',
        			'Eb Minor', 'Bb Minor', 'A# Minor', 'F Minor', 'C Minor', 'G Minor',
        			'D Minor'];
    var key = "Key: " + keyArray[Math.floor(Math.random() * keyArray.length)];
    $('#key').html(key);
});

document.getElementById("reset").onclick = function reset() {
	window.location = "";
};
