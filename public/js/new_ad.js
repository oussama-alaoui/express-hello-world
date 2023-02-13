const mawad = [["---اختر---", "---اختر---"],
["البلاستيك", "plastique"], 
["المعادن", "metal"],
["الورق", "paper"], 
["المطاط","rubber"], 
["الاخشاب", "wood"],
["الزيوت","oil"], 
["الملابس", "clothes"]]

const ajhiza = [["---اختر---", "---اختر---"],
["الاجهزة كهربائية", "electrics"],
["الاجهزة الاكترونية", "electronics"],
["المحركات", "engines"]]

const mokhalafat = [["---اختر---", "---اختر---"],
["مخلفات الهدم و البناء", "construction"],
["المخلفات العضوية", "organic"],
["المخلفات الخضراء", "green"]
]

//this tables are for the first category
const plastique = ["---اختر---","PP", "HD", "PVC", "UPVC", "PP R", "LD", "PC", "PET"]
const metal =[["---اختر---", "---اختر---"],
["الحديد المتين", "heavyIron"],
["الحديد الخفيف", "lightIron"],
["حديد SS", "ssIron"],
["النحاس", "copper"],
["البرونز", "bronze"],
["الرصاص", "lead"]
]
const paper = [["---اختر---", "---اختر---"],
["محارم ورقية", "toiletPaper"],
["اوراق A4", "a4Paper"],
["OCC", "OCC"],
["كتب", "books"],
["مجلات", "magazines"],
["جرائد", "newsPapers"]
["اكياس اسمنت", "cementBags"]
]
const rubber = ["---اختر---","اطارات", "اخرى"]
const wood = ["---اختر---","الاخشاب"]
const oil = ["---اختر---","زيت المطبخ", "زيت المحركات", "زيوت الحولات الكهربائية", "زيت الهيدروليك"]
const clothes = ["---اختر---","ملابس", "حقاب", "احذية جلدية"] 

//this tables are for the second category
const electrics = ["---اختر---","الاجهزة كهربائية"]
const electronics = ["---اختر---","الاجهزة الاكترونية"]
const engines = ["---اختر---","المحركات"]

//this arrays are for the third category
const construction = ["---اختر---","حديد", "البلاستيك", "رمل", "رخام", "الاخشام", "اتربه للكبس"]
const organic = ["---اختر---","مخلفات مسالخ", "روث حيوانات", "اخشاب", "مخلفات مزارع", "مخلفات طعام", "اتربه للكبس"]
const green = ["---اختر---","الاعشاب", "مخلفات المزارع", "سعف النخيل", "اغصان و جذوع الاشجار"]

// this arrays are for newad-gen page
const khadamat= ["---اختر---","النقل", "الفرز", "الخدمات المختبرية", "المحاسبة", "الكبس", "التقطيع", "المعالجة", "اعادة التدوير"]

function getOption() {
    category1 = document.querySelector('#new').value;
    category2 = document.querySelector('#category2');
    output = category1.value;
    removeOptions1();
    if(category1 === "mawad"){
        for(i = 0; i < mawad.length; i++){
            var option = document.createElement("option");
            option.value = mawad[i][1];
            option.text = mawad[i][0];
            option.className = "mawad"
            category2.appendChild(option);
        }
    }
    if(category1 === "khadamat"){
        for(i = 0; i < khadamat.length; i++){
            var option = document.createElement("option");
            option.value = khadamat[i];
            option.text = khadamat[i];
            option.className = "khadamat"
            category2.appendChild(option);
        }
    }
    if(category1 === "ajhiza"){
        for(i = 0; i < ajhiza.length; i++){
            var option = document.createElement("option");
            option.value = ajhiza[i][1];
            option.text = ajhiza[i][0];
            category2.appendChild(option);
        }
    }
    if(category1 === "mokhalafat"){
        for(i = 0; i < mokhalafat.length; i++){
            var option = document.createElement("option");
            option.value = mokhalafat[i][1];
            option.text = mokhalafat[i][0];
            category2.appendChild(option);
        }
    }
}

function getCategory2()
{
    secondCategory = document.querySelector('#category2').value;
    category3 = document.querySelector('#category3');
    removeOptions2('category3');
    if(secondCategory === "plastique"){
        for(i = 0; i < plastique.length; i++){
            var option = document.createElement("option");
            option.value = plastique[i];
            option.text = plastique[i];
            option.className = "plastiques"
            category3.appendChild(option);
        }
    }
    if(secondCategory === "metal"){
        for(i = 0; i < metal.length; i++){
            var option = document.createElement("option");
            option.value = metal[i][1];
            option.text = metal[i][0];
            option.className = "metals"
            category3.appendChild(option);
        }
    }
    if(secondCategory === "paper"){
        for(i = 0; i < paper.length; i++){
            var option = document.createElement("option");
            option.value = paper[i][1];
            option.text = paper[i][0];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "rubber"){
        for(i = 0; i < rubber.length; i++){
            var option = document.createElement("option");
            option.value = rubber[i];
            option.text = rubber[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "wood"){
        for(i = 0; i < wood.length; i++){
            var option = document.createElement("option");
            option.value = wood[i];
            option.text = wood[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "oil"){
        for(i = 0; i < oil.length; i++){
            var option = document.createElement("option");
            option.value = oil[i];
            option.text = oil[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "clothes"){
        for(i = 0; i < clothes.length; i++){
            var option = document.createElement("option");
            option.value = clothes[i];
            option.text = clothes[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "electrics"){
        for(i = 0; i < electrics.length; i++){
            var option = document.createElement("option");
            option.value = electrics[i];
            option.text = electrics[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "electronics"){
        for(i = 0; i < electronics.length; i++){
            var option = document.createElement("option");
            option.value = electronics[i];
            option.text = electronics[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "engines"){
        for(i = 0; i < engines.length; i++){
            var option = document.createElement("option");
            option.value = engines[i];
            option.text = engines[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "construction"){
        for(i = 0; i < construction.length; i++){
            var option = document.createElement("option");
            option.value = construction[i];
            option.text = construction[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "organic"){
        for(i = 0; i < organic.length; i++){
            var option = document.createElement("option");
            option.value = organic[i];
            option.text = organic[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }

    if(secondCategory === "green"){
        for(i = 0; i < green.length; i++){
            var option = document.createElement("option");
            option.value = green[i];
            option.text = green[i];
            option.className = "metals"
            category3.appendChild(option);
        }
    }
}


function removeOptions1() {
    var options = document.querySelectorAll('#category2 option');
    options.forEach(o => o.remove());
}
function removeOptions2() {
    var options = document.querySelectorAll('#category3 option');
    options.forEach(o => o.remove());
 }
// document.querySelector('.output').textContent = output;
