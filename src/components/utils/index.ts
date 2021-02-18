import Service from "../../models/service/service.model";

export const toInitials = (firstName: string, lastName: string) => {
  return firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase();
}

export const toCurrency = (number: number) => {
  return new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    }
  ).format(number);
}

export const evalTotal = ((allServices: Service[] | undefined, checkedServices: {}) => {
  let newTotal = 0;

  allServices?.forEach(service => {
    if (checkedServices[service.id]) newTotal += service.price;
  });

  return newTotal;
});