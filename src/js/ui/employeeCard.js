export function renderEmployeeCard(tpl, emp) {
  const node = tpl.content.cloneNode(true);

  node.querySelector('img').src = emp.photo;
  node.querySelector('img').alt = emp.name;
  node.querySelector('.employee-card__name').textContent = emp.name;
  node.querySelector('.employee-card__role').textContent = emp.role;
  node.querySelector('.employee-card__cta').href = emp.profile;

  return node;
}
