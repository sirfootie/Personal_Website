function submitIndex() {

    var proStatement = document.getElementById("professionalStatement").value;
    var briefBio = document.getElementById("briefBiography").value;
    var dataForTxtFile = "Professional Statement: \n" + proStatement + "\nBrief Bio:\n" + briefBio;

    var location = "newIndex.txt";
    var indexData = new File([dataForTxtFile], location, { type: "text/plain" });
    var indexURL = window.URL.createObjectURL(indexData);
    var anchorTag = document.createElement("a");
    anchorTag.href = indexURL;
    anchorTag.download = location;
    anchorTag.click();
}

function submitResume() {
    var eduQualifications = document.getElementById("eduQualifications").value;
    var skillSet = document.getElementById("skillSet").value;
    var awards = document.getElementById("awards").value;
    var workExp = document.getElementById("workExp").value;
    var referees = document.getElementById("referees").value;
    var dataForTxtFile = "Educational Qualifications: \n" + eduQualifications + "\nSkill Set:\n" + skillSet + "\nAwards and Recognitions:\n" + awards + "\nWork Experience:\n" + workExp + "\nReferees:\n" + referees;

    var location = "newResume.txt";
    var resumeData = new File([dataForTxtFile], location, { type: "text/plain" });
    var resumeURL = window.URL.createObjectURL(resumeData);
    var anchorTag = document.createElement("a");
    anchorTag.href = resumeURL;
    anchorTag.download = location;
    anchorTag.click();
}

function submitProjects() {
    var projects = document.getElementById("projects").value;
    var dataForTxtFile = "Projects: \n" + projects;

    var location = "newProjects.txt";
    var projectsData = new File([dataForTxtFile], location, { type: "text/plain" });
    var projectsURL = window.URL.createObjectURL(projectsData);
    var anchorTag = document.createElement("a");
    anchorTag.href = projectsURL;
    anchorTag.download = location;
    anchorTag.click();
}

function submitSocial() {
    var link1 = document.getElementById("link1").value;
    var link2 = document.getElementById("link2").value;
    var link3 = document.getElementById("link3").value;
    var dataForTxtFile = "Link 1: \n" + link1 + "\nLink 2:\n" + link2 + "\nLink 3:\n" + link3;

    var location = "newSocial.txt";
    var socialData = new File([dataForTxtFile], location, { type: "text/plain" });
    var socialURL = window.URL.createObjectURL(socialData);
    var anchorTag = document.createElement("a");
    anchorTag.href = socialURL;
    anchorTag.download = location;
    anchorTag.click();
}

function readMessages() {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt";
    fileInput.onchange = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var contents = event.target.result;
            displayMessages(contents);
        };
        reader.readAsText(file);
    };
    fileInput.click();
}

function displayMessages(contents) {
    var messagesTable = document.getElementById("messagesTable");
    messagesTable.innerHTML = "";
    var lines = contents.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var fields = lines[i].split(",");
        var row = messagesTable.insertRow(-1);
        for (var j = 0; j < fields.length; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = fields[j];
        }
    }
}

function processLogout() {
    sessionStorage.clear();
}


