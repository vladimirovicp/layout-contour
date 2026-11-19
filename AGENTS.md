## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Правила учебного проекта

- Это frontend-only сайт научного журнала. Astro, TypeScript, обычный CSS.
- Только статический вывод. Без backend, API, БД, CMS, авторизации и SSR.
- Данные в src/data; изображения и шрифты локальные, с понятными лицензиями.
- Демонстрационные материалы явно помечены как вымышленные.
- Сначала согласовать краткий план текущего этапа; не реализовывать весь сайт сразу.
- Переиспользовать layouts и компоненты; не копировать шапку и карточки по страницам.
- Не менять утверждённые дизайн-токены без причины и согласования.
- Не добавлять библиотеки, MCP и новые функции без отдельного согласования.
- Формы ничего не отправляют; не показывать ложное сообщение об отправке.
- Использовать семантический HTML, видимый фокус и клавиатурную навигацию.
- Не скрывать переполнение всей страницы для маскировки ошибок вёрстки.
- В конце этапа показать изменённые файлы, проверки и реальные ограничения.
- Не делать коммиты, push, PR и публикацию без отдельной просьбы.