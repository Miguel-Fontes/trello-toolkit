(function () {

    const HEADER_CLASS = "list-header";
    const LIST_CLASS = "list"
    const CARD_LIST_CLASS = "list-cards"

    function getLists() {
        return document.getElementsByClassName(LIST_CLASS)
    }

    function setListCardNumber(list, counter) {
        let counterNode = document.createElement("p");
        counterNode.appendChild(document.createTextNode(counter));
        getListHeader(list).appendChild(counterNode);
    }

    function getListHeader(list) {
        let childrens = list.children;

        for (let i = 0; i < childrens.length; i++) {
            if (childrens[i].attributes.class.value.includes(HEADER_CLASS))
                return childrens[i];
        }
    }

    function getCardsList(list) {
        let childrens = list.children;

        for (let i = 0; i < childrens.length; i++) {
            if (childrens[i].attributes.class.value.includes(CARD_LIST_CLASS))
                return childrens[i];
        }
    }

    function getCardListSize(list) {
        return getCardsList(list).childElementCount;
    }

    function setListsCounters() {
        let lists = getLists();

        for (let i = 0; i < lists.length; i++) {
            let size = getCardListSize(lists[i]);
            setListCardNumber(lists[i], size)
        }

    }

    setListsCounters();
})()
