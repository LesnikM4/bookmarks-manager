async function addBookmark() {
  var name = document.getElementById('name');
  name = name.value;
  var name = document.getElementById('tag');
  tag = tag.value;
  let queryOptions = { active: true, lastFocusedWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  let url = tabs[0].url;
  chrome.bookmarks.create({
    parentId: '1',
    title: tag + name,
    url: url
  },
  () => {
    location.reload();
  })
};

document.getElementById('addButton').addEventListener('click', addBookmark);
