export {};

const root = document.querySelector<HTMLElement>('[data-article-search]');
const form = root?.querySelector<HTMLFormElement>('.search-form');
const input = form?.querySelector<HTMLInputElement>('input[name="q"]');
const submit = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
const reset = form?.querySelector<HTMLButtonElement>('button[type="reset"]');
const results = root?.querySelector<HTMLElement>('#search-results');
const statusMessage = root?.querySelector<HTMLElement>('#search-status');
const empty = root?.querySelector<HTMLElement>('#search-empty');
const list = root?.querySelector<HTMLUListElement>('.article-list');

if (root && form && input && submit && reset && results && statusMessage && empty && list) {
  const normalize = (text: string) => text.toLocaleLowerCase('ru-RU').replaceAll('ё', 'е');

  // Индекс только из уже выведенных карточек. Аннотация в поиск не входит.
  const cards = Array.from(list.querySelectorAll<HTMLLIElement>('[data-search-card]'), (element) => ({
    element,
    text: normalize([
      element.querySelector('.card-title')?.textContent ?? '',
      ...Array.from(element.querySelectorAll('.authors li'), (author) => author.textContent ?? ''),
      element.dataset.searchKeywords ?? '',
    ].join(' ')),
  }));

  const applyQuery = (value: string) => {
    const query = value.trim();
    const words = query ? normalize(query).split(/\s+/) : [];
    let count = 0;

    input.value = query;
    for (const card of cards) {
      const matches = words.every((word) => card.text.includes(word));
      card.element.hidden = !matches;
      if (matches) count += 1;
    }

    list.hidden = count === 0;
    empty.hidden = count > 0;
    results.dataset.searchState = count === 0 ? 'empty' : query ? 'found' : 'all';
    statusMessage.textContent = query
      ? count > 0
        ? `Найдено статей: ${count} из ${cards.length}. Запрос: «${query}».`
        : `По запросу «${query}» ничего не найдено.`
      : cards.length > 0 ? `Все статьи: ${cards.length}.` : 'Статьи пока не добавлены.';
  };

  const restoreFromUrl = () => {
    applyQuery(new URL(window.location.href).searchParams.get('q') ?? '');
  };

  const commitQuery = (value: string) => {
    const query = value.trim();
    const url = new URL(window.location.href);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');

    if (url.href !== window.location.href) window.history.pushState(null, '', url);
    applyQuery(query);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    commitQuery(input.value);
  });

  form.addEventListener('reset', (event) => {
    event.preventDefault();
    commitQuery('');
    input.focus();
  });

  window.addEventListener('popstate', restoreFromUrl);
  window.addEventListener('pageshow', restoreFromUrl);
  restoreFromUrl();

  // Без скрипта кнопки отключены, а исходный HTML-список остаётся доступным.
  submit.disabled = false;
  reset.disabled = false;
}
