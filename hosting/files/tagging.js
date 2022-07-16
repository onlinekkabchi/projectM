import { cutequery } from "./make-cutie-query.js";

function addFilterTag(tagname) {
    const tagBox = cutequery(".tag-box--is-here");
    const tag = `<div class="filter-tag">${tagname}(X)</div>`;
    return (tagBox.innerHTML += tag);
}

function addSearchResultTag() {}

function removeTag() {}

export { addFilterTag, addSearchResultTag, removeTag };
