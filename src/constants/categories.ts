export type Category = {
  id: string;
  value: string;
  label: string;
};

export const categories: Category[] = [
  {id: '1', value: 'Bebidas', label: 'Bebidas'},

  {id: '2', value: 'Comidas', label: 'Comidas'},

  {id: '3', value: 'Casa e Moveis', label: 'Casa e Moveis'},

  {id: '4', value: 'Tecnologia', label: 'Tecnologia'},

  {id: '5', value: 'Moda', label: 'Moda'},

  {id: '6', value: 'Eletrodomesticos', label: 'Eletrodomesticos'},

  {id: '7', value: 'Ferramentas', label: 'Ferramentas'},

  {id: '8', value: 'Esportes', label: 'Esportes'},

  {id: '9', value: 'Acessorios', label: 'Acessorios'},
  {id: '10', label: 'Todas', value: 'todas'},
];
