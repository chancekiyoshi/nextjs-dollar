import { Stuff } from '@prisma/client';

/* Renders a single row in the Admin List Stuff table. */
const StuffItemAdmin = ({ name, quantity, value, condition, owner }: Stuff) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>${Number(value).toFixed(2)}</td>
    <td>{condition}</td>
    <td>{owner}</td>
  </tr>
);

export default StuffItemAdmin;