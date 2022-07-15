import { cutequery } from "./make-cutie-query.js";

export default function Tagging(tagname, targetBox) {
    const target = cutequery(targetBox);
    const tag = `<div class="filter-tag ${tagname}">${tagname}</div>`;
    target.insertAdjacentHTML("afterend", tag);
    return;
}
