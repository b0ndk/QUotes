


var siteName = document.getElementById("BookmarkName");
var siteUrl = document.getElementById("BookmarkURL");
var submitButton = document.getElementById("SUBMIT");
var tableContent = document.getElementById("tableContent");
var bookmarks = [];

if (localStorage.getItem("bookmarksList")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));
    for (var x = 0; x < bookmarks.length; x++) {
        display();
    }
}

function addBookmark() {
    if (!validate(siteName, nameRegex) || !validate(siteUrl, urlRegex)) {
        alert("ARE YOU DUMP :\n- Site Name: Minimum 3 characters.\n- URL: Must be a valid URL starting with http:// or https://");
        return;
    }

    var newBookmark = {
        index: bookmarks.length + 1,
        websiteName: siteName.value,
        visit: siteUrl.value
    };
    
    bookmarks.push(newBookmark);
    localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
    display();
    clearInput();
}

function display() {
    var newBookmark = "";
    for (var i = 0; i < bookmarks.length; i++) {
        newBookmark += `
            <tr>
                <td>${i + 1}</td>
                <td>${bookmarks[i].websiteName}</td>
                <td>
                  <button onclick="visit(event)" data-index="${i}" class="btn btn btn-outline-success btn-visit"  data-index="${bookmarks[i].visit}">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
                </td>
                <td>
                  <button onclick="deleteBookmark(${i})" class="btn btn-outline-danger btn-delete  pe-2" >
                    <i class="fa-solid fa-trash-can fa-shake"></i>
                    Delete
                  </button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tableContent").innerHTML = newBookmark;
}

function deleteBookmark(deletedIndex) {
    bookmarks.splice(deletedIndex, 1);
    localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
    display();
}

function clearInput() {
    siteName.value = "";
    siteUrl.value = "";
    siteName.classList.remove("is-valid", "is-invalid");
    siteUrl.classList.remove("is-valid", "is-invalid");
}

var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

siteName.addEventListener("input", function () {
    validate(siteName, nameRegex);
});

siteUrl.addEventListener("input", function () {
    validate(siteUrl, urlRegex);
});

function validate(element, regex) {
    if (regex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        return false;
    }
}

function visit(url) {
    
    var websiteIndex =url.target.dataset.index;
    var httpsRegex = /^https?:\/\//;

    if (httpsRegex.test(bookmarks[websiteIndex].visit)) {
        window.open(bookmarks[websiteIndex].visit, "_blank");
    } else {
        window.open(`https://${bookmarks[websiteIndex].visit}`, "_blank");
    }
}