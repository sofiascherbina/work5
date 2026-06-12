export function getUserNameById(users, userId) {
  const user = users.find((item) => item.id === userId);
  return user ? user.name : "Unknown user";
}

export function filterPosts(posts, searchQuery, selectedUserId) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.body.toLowerCase().includes(normalizedQuery);

    const matchesUser =
      selectedUserId === "all" || post.userId === Number(selectedUserId);

    return matchesSearch && matchesUser;
  });
}

export function sortPosts(posts, sortType) {
  const postsCopy = [...posts];

  switch (sortType) {
    case "title-asc":
      return postsCopy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return postsCopy.sort((a, b) => b.title.localeCompare(a.title));
    case "id-desc":
      return postsCopy.sort((a, b) => b.id - a.id);
    case "id-asc":
    default:
      return postsCopy.sort((a, b) => a.id - b.id);
  }
}

export function paginatePosts(posts, currentPage, perPage) {
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  return posts.slice(firstIndex, lastIndex);
}

export function getTotalPages(itemsLength, perPage) {
  return Math.ceil(itemsLength / perPage) || 1;
}
