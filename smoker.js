document.addEventListener("DOMContentLoaded", function() {
    var fieldContainers = document.querySelectorAll('.field-container');
    fieldContainers.forEach(function(container) {
        var span = container.querySelector('span');
        span.innerText = "Not filled";
    });
});

//資料清空
function clearForm() {
    var elements = document.getElementsByClassName("clearable");

    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
    return false;
}

//圖片處理區
function openPopup() {
    document.getElementById('overlay').style.display = 'flex';

}
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

//資料處理區
document.getElementById("showDataButton").addEventListener("click", function() {
    openDataDisplay();
});

function openDataDisplay() {
    document.getElementById("dataDisplay").style.display = "flex";
}

function closeDataDisplay() {
    document.getElementById("dataDisplay").style.display = "none";
}

//資料同步區
function toggleDetails() {
    document.getElementById('idAgeRightSpan').innerText = document.getElementById('idAge').value || 'Not filled';
    document.getElementById('idHeightRightSpan').innerText = document.getElementById('idHeight').value || 'Not filled';
    document.getElementById('idWeightRightSpan').innerText = document.getElementById('idWeight').value || 'Not filled';
    document.getElementById('idWaistRightSpan').innerText = document.getElementById('idWaist').value || 'Not filled';
    document.getElementById('idEyesightLeftRightSpan').innerText = document.getElementById('idEyesightLeft').value || 'Not filled';
    document.getElementById('idEyesightRightRightSpan').innerText = document.getElementById('idEyesightRight').value || 'Not filled';
    document.getElementById('idHearingLeftRightSpan').innerText = document.getElementById('idHearingLeft').value || 'Not filled';
    document.getElementById('idHearingRightRightSpan').innerText = document.getElementById('idHearingRight').value || 'Not filled';
    document.getElementById('idSystolicRightSpan').innerText = document.getElementById('idSystolic').value || 'Not filled';
    document.getElementById('idRelaxationRightSpan').innerText = document.getElementById('idRelaxation').value || 'Not filled';
    document.getElementById('idFastingBloodSugarRightSpan').innerText = document.getElementById('idFastingBloodSugar').value || 'Not filled';
    document.getElementById('idCholesterolTotalRightSpan').innerText = document.getElementById('idCholesterolTotal').value || 'Not filled';
    document.getElementById('idTriglycerideRightSpan').innerText = document.getElementById('idTriglyceride').value || 'Not filled';
    document.getElementById('idHDLCholesterolRightSpan').innerText = document.getElementById('idHDLCholesterol').value || 'Not filled';
    document.getElementById('idLDLCholesterolRightSpan').innerText = document.getElementById('idLDLCholesterol').value || 'Not filled';
    document.getElementById('idHemoglobinRightSpan').innerText = document.getElementById('idHemoglobin').value || 'Not filled';
    document.getElementById('idUrineProteinRightSpan').innerText = document.getElementById('idUrineProtein').value || 'Not filled';
    document.getElementById('idSerumCreatinineRightSpan').innerText = document.getElementById('idSerumCreatinine').value || 'Not filled';
    document.getElementById('idASTRightSpan').innerText = document.getElementById('idAST').value || 'Not filled';
    document.getElementById('idALRightSpan').innerText = document.getElementById('idALT').value || 'Not filled';
    document.getElementById('idGTPRightSpan').innerText = document.getElementById('idGTP').value || 'Not filled';
    document.getElementById('idDentalCariesRightSpan').innerText = document.getElementById('idDentalCaries').value || 'Not filled';

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//到首頁處理區
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var scrollToTopBtn2 = document.getElementById("scrollToTopBtnSubmit");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn2.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
        scrollToTopBtn2.style.display = "none";
    }
}

//亂數產生器
function generateRandomValue(min, max) {
    return (Math.random() * (max - min) + min);
}

function ensureWithinRange(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function generateRandomData() {
    // 生成隨機数据
    var randomAge = parseInt(generateRandomValue(20, 85));
    var randomHeight = parseInt(generateRandomValue(130, 190));
    var randomWeight = parseInt(generateRandomValue(30, 135));
    var randomWaist = parseInt(generateRandomValue(51, 129));
    var randomEyesightLeft = parseFloat(ensureWithinRange(generateRandomValue(0.1, 9.9), 0.1, 9.9).toFixed(2));
    var randomEyesightRight = parseFloat(ensureWithinRange(generateRandomValue(0.1, 9.9), 0.1, 9.9).toFixed(2));
    var randomHearingLeft = parseInt(generateRandomValue(1, 2));
    var randomHearingRight = parseInt(generateRandomValue(1, 2));
    var randomSystolic = parseInt(generateRandomValue(71, 233));
    var randomRelaxation = parseInt(generateRandomValue(40, 146));
    var randomFastingBloodSugar = parseInt(ensureWithinRange(generateRandomValue(46, 423), 40, 423));
    var randomCholesterolTotal = parseInt(generateRandomValue(55, 445));
    var randomTriglyceride = parseInt(generateRandomValue(8, 999));
    var randomHDLCholesterol = parseInt(generateRandomValue(4, 359));
    var randomLDLCholesterol = parseInt(generateRandomValue(1, 1860));
    var randomHemoglobin = parseFloat(ensureWithinRange(generateRandomValue(4.9, 21.1), 4.9, 21.1).toFixed(2));
    var randomUrineProtein = parseInt(ensureWithinRange(generateRandomValue(1, 6), 1, 6));
    var randomSerumCreatinine = parseInt(ensureWithinRange(generateRandomValue(0.1, 11.6), 0.1, 11.6).toFixed(2));
    var randomAST = parseInt(generateRandomValue(6, 1090));
    var randomALT = parseInt(generateRandomValue(1, 2914));
    var randomGTP = parseInt(generateRandomValue(2, 999));
    var randomDentalCaries = parseInt(generateRandomValue(0, 2));

    // 将随机数据填充到输入字段中
    document.getElementById("idAge").value = randomAge;
    document.getElementById("idHeight").value = randomHeight;
    document.getElementById("idWeight").value = randomWeight;
    document.getElementById("idWaist").value = randomWaist;
    document.getElementById("idEyesightLeft").value = randomEyesightLeft.toFixed(2);
    document.getElementById("idEyesightRight").value = randomEyesightRight.toFixed(2);
    document.getElementById("idHearingLeft").value = randomHearingLeft;
    document.getElementById("idHearingRight").value = randomHearingRight;
    document.getElementById("idSystolic").value = randomSystolic;
    document.getElementById("idRelaxation").value = randomRelaxation;
    document.getElementById("idFastingBloodSugar").value = randomFastingBloodSugar.toFixed(2);
    document.getElementById("idCholesterolTotal").value = randomCholesterolTotal;
    document.getElementById("idTriglyceride").value = randomTriglyceride;
    document.getElementById("idHDLCholesterol").value = randomHDLCholesterol;
    document.getElementById("idLDLCholesterol").value = randomLDLCholesterol;
    document.getElementById("idHemoglobin").value = randomHemoglobin.toFixed(2);
    document.getElementById("idUrineProtein").value = randomUrineProtein.toFixed(2);
    document.getElementById("idSerumCreatinine").value = randomSerumCreatinine.toFixed(2);
    document.getElementById("idAST").value = randomAST;
    document.getElementById("idALT").value = randomALT;
    document.getElementById("idGTP").value = randomGTP;
    document.getElementById("idDentalCaries").value = randomDentalCaries;
}


//送出與接收資料
function submitForm() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    var xhr = new XMLHttpRequest();
    var smokerForm = new FormData(document.getElementById("smokerForm"));
    xhr.open("POST", "R.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseText);
                var response = JSON.parse(xhr.responseText);

                if (response.status === "success") {
                    console.log(response.data);
                    var randomValue = String(response.data);
                    var cleanestValue = randomValue.replace(/["\s]+/g, "");
                    if (cleanestValue === "0") {
                        document.getElementById("checkSmoke").textContent = "無抽菸";
                    } else {                    
                        document.getElementById("checkSmoke").textContent = "有抽菸";
                    }
                    
                } else {
                    console.error(response.message);
                }

            } else {
                console.error("Error during the request.");
            }
        }
    };
    xhr.send(smokerForm);  // Send form data
}