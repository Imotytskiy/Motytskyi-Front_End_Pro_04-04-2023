import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Albums() {
  const { albums } = useLoaderData();
  return (
    <table>
      <thead>
        <tr>
          <th>TITLE</th>
          <th>USER</th>
          <th>ALBUM</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album) => (
          <tr key={album.id}>
            <td>{album.title}</td>
            <td>{album.userId}</td>
            <td>{album.id}</td>
            <td>
              <NavLink
                key={album.id}
                className="new-contact"
                to={`/albums/${album.id}/photos`}
              >
                PHOTOS
              </NavLink>
              <Link className="button-denied" to="/">
                ПОВЕРНУТИСЯ
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
