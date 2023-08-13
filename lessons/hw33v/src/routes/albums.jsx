import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Albums() {
  const { albums } = useLoaderData();
  return (
    <tbody>
      {albums.map((album) => (
        <tr key={album.id}>
          <td>{album.title}</td>
          <td>{album.userId}</td>
          <td>{album.id}</td>
          <td>
            <NavLink className="new-contact" to="/">
              PHOTOS
            </NavLink>
            <Link className="button-denied" to="/">
              ПОВЕРНУТИСЯ
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}