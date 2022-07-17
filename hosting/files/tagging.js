import { cutequery } from "./make-cutie-query.js";

function addFilterTag(tagname, tagclass) {
    const tagBox = cutequery(".tag-box--is-here");
    const tag = `<div class="filter-tag ${tagclass}">${tagname}(X)</div>`;
    return (tagBox.innerHTML += tag);
}

function addSearchResultTag() {}

function removeTag(target) {
    const targetTag = cutequery(target);
    targetTag.remove();
}

export { addFilterTag, addSearchResultTag, removeTag };
