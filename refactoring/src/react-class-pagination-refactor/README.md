# React Class Pagination Refactor Project

Це навчальний React-проєкт, написаний на класових компонентах.
Твоє завдання — відрефакторити його на функціональні компоненти з хуками.

## Що є в проєкті

- завантаження posts і users з JSONPlaceholder;
- класові компоненти;
- `componentDidMount`;
- `this.state`;
- `this.setState`;
- пошук по постах;
- фільтр по користувачу;
- сортування;
- вибір кількості постів на сторінці;
- пагінація;
- loading/error/empty стани.

## Як запустити

```bash
npm install
npm run dev
```

## Основне завдання

Перепиши всі компоненти з класових на функціональні.

Наприклад:

```jsx
class App extends Component {
  render() {
    return <div>Hello</div>;
  }
}
```

треба замінити на:

```jsx
function App() {
  return <div>Hello</div>;
}
```

## Що треба використати

- `useState` замість `this.state`;
- `setState` з `useState`;
- `useEffect` замість `componentDidMount`;
- звичайні функції замість методів класу;
- props без `this.props`.

## Компоненти для рефакторингу

1. `App.jsx`
2. `Header.jsx`
3. `PostsPage.jsx`
4. `FiltersPanel.jsx`
5. `StatsPanel.jsx`
6. `PostList.jsx`
7. `PostCard.jsx`
8. `Pagination.jsx`
9. `StatusMessage.jsx`

## Підказка для PostsPage

Зараз там є такий state:

```jsx
state = {
  posts: [],
  users: [],
  searchQuery: "",
  selectedUserId: "all",
  sortType: "id-asc",
  currentPage: 1,
  perPage: 6,
  isLoading: false,
  error: null,
};
```

У функціональному компоненті це можна розбити так:

```jsx
const [posts, setPosts] = useState([]);
const [users, setUsers] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [selectedUserId, setSelectedUserId] = useState("all");
const [sortType, setSortType] = useState("id-asc");
const [currentPage, setCurrentPage] = useState(1);
const [perPage, setPerPage] = useState(6);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
```

## Додаткове завдання

Після рефакторингу можна оптимізувати обчислення через `useMemo`:

- `preparedPosts`
- `currentPosts`
- `totalPages`
