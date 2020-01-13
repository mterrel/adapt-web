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

const announcementWrappers = [];

function resizeHeader() {
    const pusher = $(".navPusher");
    if (!pusher.length) {
        console.warn("Could not find .navPusher");
        return;
    }

    const nav = $(".slidingNav");
    if (!nav.length) console.warn("Could not find .slidingNav");

    const announceHeight =
        announcementWrappers.reduce((acc, wrapper) => acc + wrapper.height(), 0);
    const navHeight = (nav.height()) || 0;
    const height = navHeight + announceHeight;

    pusher.css('padding-top', height);
}

const announcementConfig = {
    maxSaved: 10,
    cookie: "closed-announcements",
};

function loadClosedAnnouncements() {
    const saved = Cookies.getJSON(announcementConfig.cookie);
    return Array.isArray(saved) ? saved : [];
}
let closedAnnouncements = loadClosedAnnouncements();

function saveClosedAnnouncements() {
    Cookies.set(announcementConfig.cookie, closedAnnouncements, { expires: 365 });
}

function isClosed(id) {
    return closedAnnouncements.includes(id);
}

function announcementInit(announceId) {
    const wrapperId = `#announcementWrapper-${announceId}`;
    const wrapper = $(wrapperId);
    const announce = $(`${wrapperId} > .announcement`);

    if (!wrapper.length) console.warn(`Could not find ${wrapperId}`);
    if (!announce.length) console.warn(`Could not find .announcement in ${wrapperId}`);

    if (isClosed(announceId)) {
        announce.addClass("dismissed");
    } else {
        announcementWrappers.push(wrapper);
        $(`${wrapperId} .closeButton`).on("click", () => {
            announce.addClass("dismissed");
            resizeHeader();
            if (!isClosed(announceId)) {
                closedAnnouncements.unshift(announceId);
                closedAnnouncements = closedAnnouncements.slice(0, announcementConfig.maxSaved);
                saveClosedAnnouncements();
            }
        });
    }
}

function headerInit() {
    $(window).resize(resizeHeader);
    resizeHeader();
}

$(document).ready(() => {
    headerInit();
    compressAdjacentCode();
});
