# Movie collections
### Приложение для поиска фильмов
Используемое API: https://api.kinopoisk.dev/ 
#### `❗У api есть ограничение на 1000 запросов в сутки❗`

DEMO: [movie-collections-liard.vercel.app](https://movie-collections-liard.vercel.app/)

## Что выполнено:

### 1 уровень (обязательный - необходимый минимум)
- [x] Реализованы __Требования к функциональности.__
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется __LocalStorage.__

#### React
- [x] Используются __функциональные компоненты c хуками в приоритете над классовыми.__
- [x] Есть разделение на __умные и глупые компоненты__: [SignIn](https://github.com/SarNadya/movie_collections/blob/master/src/components/SignIn.tsx) ,[SearchItem](https://github.com/SarNadya/movie_collections/blob/master/src/components/SearchItem/SearchItem.tsx)
- [x] Есть __рендеринг списков__: [MovieList](https://github.com/SarNadya/movie_collections/blob/master/src/components/MovieList.tsx)
- [x] Реализована хотя бы одна __форма__: [SignUp](https://github.com/SarNadya/movie_collections/blob/master/src/components/SignUp.tsx)
- [x] Есть применение __Контекст API__: [AuthContext](https://github.com/SarNadya/movie_collections/blob/master/src/context/AuthContext.tsx)
- [x] Есть применение __предохранителя__: [ErrorBoundary](https://github.com/SarNadya/movie_collections/blob/master/src/components/ErrorBoundary/ErrorBoundary.tsx)
- [x] Есть  __кастомный хук__: [useInput](https://github.com/SarNadya/movie_collections/blob/master/src/hooks/useInput.tsx)
- [x] Несколько компонентов используют __PropTypes__: [FavoritesItem](https://github.com/SarNadya/movie_collections/blob/master/src/components/FavoritesItem/FavoritesItem.tsx), [HistoryItem](https://github.com/SarNadya/movie_collections/blob/master/src/components/HistoryItem/HistoryItem.tsx), [SearchSuggest](https://github.com/SarNadya/movie_collections/blob/master/src/components/SearchSuggest/SearchSuggest.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (__debounce__): [Search](https://github.com/SarNadya/movie_collections/blob/master/src/components/Search/Search.tsx)
- [x] Есть применение __lazy + Suspense__: [AppRouter](https://github.com/SarNadya/movie_collections/blob/master/src/components/AppRouter.tsx), [MainPageAsync](https://github.com/SarNadya/movie_collections/blob/master/src/pages/MainPage/MainPage.async.tsx)

#### Redux
- [x] Используется __Modern Redux with Redux Toolkit__: [store](https://github.com/SarNadya/movie_collections/blob/master/src/store/store.ts)
- [x] Используются __слайсы__: [userSlice](https://github.com/SarNadya/movie_collections/blob/master/src/store/reducers/userSlice.ts)
- [x] Есть __кастомная мидлвара__: [localStorageMiddleware](https://github.com/SarNadya/movie_collections/blob/master/src/store/middlewares/localStorageMiddleware.ts)
- [x] Используется __RTK Query__: [MovieService](https://github.com/SarNadya/movie_collections/blob/master/src/services/MovieService.ts)
- [x] Используется __Transforming Responses__: [transformResponse](https://github.com/SarNadya/movie_collections/blob/master/src/utils/transformResponse.ts)

### 2 уровень (необязательный)
- [x] Используется __TypeScript__
- [x] Настроен __CI/CD.__

### Дополнительно:
- Используется дизайн-система __Ant Design__
