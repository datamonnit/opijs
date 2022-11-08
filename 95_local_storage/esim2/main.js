document.getElementById('myForm').addEventListener('submit', saveLinks)
document.getElementById('bookmarkList').addEventListener('click', clickCard)

// Create a const for bookmarks
let bookmarks = [];

// check if key exists in localStorage 
if (localStorage.getItem('bookmarks') === null){
    // and create one if it is missing
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} else {
    // or get data from localStorage
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
}

fetchLinks();

function bookmarkExists(bookmark){
    const foundBookmarks = bookmarks.filter((bm) => {
        bm.name != bookmark.name;
    })
    
    return foundBookmarks.length == 0 ? false : true;
}

function saveLinks(e) {
    e.preventDefault();
    console.log('Saving links');

    const siteName = document.getElementById('siteName').value;
    const siteDescription = document.getElementById('siteDescription').value;
    const siteAddress = document.getElementById('siteAddress').value;

    const bookmark = {
        name: siteName,
        description: siteDescription,
        address: siteAddress
    }

    if (bookmarkExists(bookmark)){
        alert('Bookmark allready exists!')
        return;
    }

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

    fetchLinks()

}

function fetchLinks() {

    const results = document.getElementById('bookmarkList')
    results.innerHTML = "";

    let index = 0;
    bookmarks.forEach(bookmark => {
        console.log(bookmark)
        
        results.innerHTML += `
            <div class="col">
                <div class="card">
                    <h3 class="card-header">${bookmark.name}</h3>
                    <div class="card-body">
                        <p class="card-text">${bookmark.description}</p>
                        <a class="btn btn-primary" target="_blank" href="${bookmark.address}">Visit site</a>
                        <a class="btn btn-danger">Delete</a>
                    </div>
                    <button type="button" id="delete-${index++}" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></button>
                </div>
            </div>
        `
    });
}

function clickCard(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-close')){
        let cardToRemove = e.target.closest('.card');
        let parent = document.getElementById('bookmarkList')
        cardToRemove.remove();
        console.log(e.target.id);

        newBookmarks = bookmarks.filter((bookmark) => {

        })
    }
}