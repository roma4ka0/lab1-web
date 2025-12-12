import { loadEmployees } from '../api/employees';
import { renderEmployeeCard } from '../ui/employeeCard';

export async function initAbout() {
  const list = document.querySelector('.team__list');
  const tpl = document.getElementById('employee-card-tpl');
  if (!list || !tpl) return;

  const employees = await loadEmployees(6);
  const frag = document.createDocumentFragment();

  employees.forEach(emp => {
    frag.append(renderEmployeeCard(tpl, emp));
  });

  list.innerHTML = '';
  list.append(frag);
}
