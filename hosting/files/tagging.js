import { cutequery } from "./make-cutie-query.js";

function addFilterTag(tagname, filtertagclassname) {
    const tagBox = cutequery(".tag-box--is-here");
    const thetag = document.createElement("div");
    thetag.className = `tag-style filter-tag ${filtertagclassname}`;
    thetag.innerText = tagname + "(X)";
    thetag.addEventListener("click", removeTag);
    return tagBox.appendChild(thetag);
}

function addSearchResultTag(tagname) {
    const tagBox = cutequery(".tag-box--is-here");
    const thetag = document.createElement("div");
    const tagClass = [0, 1, 2].map((el) => tagname.charCodeAt(el));
    console.log(tagClass);
    thetag.className = `tag-style search-result-tag ${tagClass}`;
    thetag.innerText = tagname + "(X)";
    thetag.addEventListener("click", removeTag);
    return tagBox.appendChild(thetag);
}

function removeTag(event) {
    return event.target.remove();
}

function removeFilterTag(filtername, headermenuname) {
    const e = document.querySelector(filtername);
    return e.parentElement.removeChild(e);
}

export { addFilterTag, addSearchResultTag, removeTag, removeFilterTag };
