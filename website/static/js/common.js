function compressAdjacentCode() {
    const codeSiblingSelector = 'code, a:has(code)';
    function sibFilter(sibType) {
        return function() {
            const sib = this[sibType];
            return $(sib).is(codeSiblingSelector);
        }
    }
    function toCode() {
        return this.tagName === 'CODE' ? this : $(this).children('code')[0];
    }
    const codeEls = $(codeSiblingSelector);

    codeEls.filter(sibFilter('previousSibling'))
    .map(toCode)
    .css({ paddingLeft: 0 });

    codeEls.filter(sibFilter('nextSibling'))
    .map(toCode)
    .css({ paddingRight: 0 });
}

$(document).ready(() => {
    compressAdjacentCode();
});
