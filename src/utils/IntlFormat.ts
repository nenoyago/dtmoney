export function numberFormat(value: number) {
  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return format;
}

export function dateFormat(date: string) {
  const format = new Intl.DateTimeFormat('pt-BR')
    .format(new Date(date));

  return format;
}