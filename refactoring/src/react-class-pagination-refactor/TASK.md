# Завдання: рефакторинг пагінації з класових компонентів на хуки

## Мета

Переписати React-проєкт з class components на function components.

## Обов'язково зробити

### 1. Замінити всі класові компоненти

Було:

```jsx
class Pagination extends Component {
  render() {
    return <div>...</div>;
  }
}
```

Стало:

```jsx
function Pagination() {
  return <div>...</div>;
}
```

### 2. Замінити `this.state`

Було:

```jsx
this.state.currentPage
```

Стало:

```jsx
currentPage
```

### 3. Замінити `this.setState`

Було:

```jsx
this.setState({ currentPage: page });
```

Стало:

```jsx
setCurrentPage(page);
```

### 4. Замінити `componentDidMount`

Було:

```jsx
componentDidMount() {
  this.loadData();
}
```

Стало:

```jsx
useEffect(() => {
  loadData();
}, []);
```

### 5. Переписати обробники подій

Було:

```jsx
handlePageChange = (page) => {
  this.setState({ currentPage: page });
};
```

Стало:

```jsx
const handlePageChange = (page) => {
  setCurrentPage(page);
};
```

## Найважливіший компонент

Найбільше роботи буде у файлі:

```txt
src/components/PostsPage.jsx
```

Саме там головна логіка:

- завантаження даних;
- пошук;
- фільтр;
- сортування;
- пагінація;
- loading;
- error.
